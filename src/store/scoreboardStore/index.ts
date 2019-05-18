import API from 'config/API';
import { cheburhandler, cheburmodel } from 'libs/Cheburstore';
import Cheburstore from 'libs/Cheburstore/Cheburstore';
import Requester from 'libs/Requester/Requester';
import {
  actionScoreboardLoadPageError,
  actionScoreboardLoadSuccess,
  scoreboardActions,
} from './actions';
import { normalizeLeadersGet } from './normalizeResponse';
import { ScoreboardState } from './types';

const SCOREBOARD_PAGE_LIMIT = 6;

// @ts-ignore
@cheburmodel
class ScoreboardStore extends Cheburstore<ScoreboardState> {
  constructor() {
    super();
    this.store = {
      leaders: [],
      total: 0,
    };
  }

  @cheburhandler(scoreboardActions.LOAD)
  async loadLeaders() {
    const { leaders: oldLeaders } = this.store;
    const leadersResp = await Requester.get(API.scores(), {
      limit: SCOREBOARD_PAGE_LIMIT,
      start: oldLeaders.length,
    });

    const { leaders = null, total = null } =
      normalizeLeadersGet(leadersResp) || {};

    if (!leaders || total === null) {
      this.emit(actionScoreboardLoadPageError());
      return;
    }

    const newLeaders = [...oldLeaders, ...leaders];
    const newTotal = Math.max(newLeaders.length, total);

    this.store = {
      total: newTotal,
      leaders: newLeaders,
    };

    this.emit(
      actionScoreboardLoadSuccess({
        leaders: newLeaders,
        hasMore: newLeaders.length < newTotal || newTotal === 0, // если еще ничего не загружено
      })
    );
  }

  @cheburhandler(scoreboardActions.RESET)
  handleReset() {
    this.store = {
      leaders: [],
      total: 0,
    };
    this.emit(
      actionScoreboardLoadSuccess({
        leaders: [],
        hasMore: true,
      })
    );
  }
}

export default new ScoreboardStore();
