import API from 'config/API';
import { Action, cheburhandler, cheburmodel } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import Requester from 'libs/Requester/Requester';
import {
  actionScoreboardLoadPageError,
  actionUpdateLeaders,
  LoadScoreboardPL,
  scoreboardActions,
} from './actions';
import { normalizeLeadersGet, normalizeTotal } from './normalizeResponse';
import { ScoreboardState } from './types';

@cheburmodel
class ScoreboardStore extends Cheburstore<ScoreboardState> {
  constructor() {
    super();
    this.store = {
      leaders: null,
      offset: 0,
      total: 0,
    };
  }

  @cheburhandler(scoreboardActions.LOAD_LEADERS)
  async loadLeaders(action: Action<LoadScoreboardPL>) {
    const { limit, offset } = action.payload;
    const leadersResp = await Requester.get(API.scores(), {
      limit,
      offset,
    });

    const leaders = normalizeLeadersGet(leadersResp);
    const total = normalizeTotal(leadersResp);

    if (!leaders || !total) {
      this.emit(actionScoreboardLoadPageError());
      return;
    }

    this.store = {
      leaders,
      offset,
      total,
    };
    this.emit(
      actionUpdateLeaders({
        leaders,
        total,
      })
    );
  }
}

export default new ScoreboardStore();
