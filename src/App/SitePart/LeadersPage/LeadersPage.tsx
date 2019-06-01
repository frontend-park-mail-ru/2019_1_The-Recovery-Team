import MainBlock from 'components/MainBlock';
import * as React from 'libs/Cheburact';
import classNames from 'libs/classNames';
const styles = require('./LeadersPage.modules.scss');
import SimpleButton from 'components/SimpleButton';
import { Action, connectToCheburstore, onCheburevent } from 'libs/Cheburstore';
import scoreboardStore from 'store/scoreboardStore';
import {
  actionScoreboardLoad,
  actionScoreboardReset,
  scoreboardActions,
  UpdateLeadersPL,
} from 'store/scoreboardStore/actions';
import userStore, { userActions } from 'store/userStore';

const cn = classNames(styles);

// @ts-ignore
@connectToCheburstore
export default class LeadersPage extends React.Component {
  state = {
    leaders: [],
    hasMore: true,
  };

  componentDidMount() {
    this.handleLoadNextPage();
  }

  handleLoadNextPage = () => scoreboardStore.emit(actionScoreboardLoad());

  @onCheburevent(userStore, userActions.LOGOUT_SUCCESS)
  handleLogout() {
    this.setState({});
  }

  @onCheburevent(userStore, userActions.UPDATE_SUCCESS)
  handleUpdate() {
    this.setState({});
  }

  @onCheburevent(scoreboardStore, scoreboardActions.LOAD_SUCCESS)
  handleUpdateLeaders(action: Action<UpdateLeadersPL>) {
    this.setState({
      leaders: action.payload.leaders,
      hasMore: action.payload.hasMore,
    });
  }

  render() {
    const { leaders, hasMore } = this.state;
    const { user: me } = userStore.select();
    let leadersCounter = 0;
    console.log('me',me);

    return (
      <MainBlock className={cn('leaders-page')}>
        <div className={cn('rows-block', 'rows-block_header', 'row')}>
          <div className={cn('row__col', 'row__col_index')}>
            <span className={cn('circle', 'circle_header')}>№</span>
          </div>
          <div className={cn('row__col', 'row__col_user')}>Игрок</div>
          <div className={cn('row__col', 'row__col_rating')}>Рейтинг</div>
        </div>

        {me && (
          <div className={cn('rows-block', 'rows-block_me')}>
            <div className={cn('row')}>
              <div className={cn('row__col', 'row__col_index')}>
                <span className={cn('circle', 'circle_me')}>{`${
                  me.position
                }`}</span>
              </div>
              <div className={cn('row__col', 'row__col_user')}>
                {me.nickname}
              </div>
              <div className={cn('row__col', 'row__col_rating')}>
                {`${me.record}`}
              </div>
            </div>
          </div>
        )}

        <div className={cn('rows-block', 'rows-block', 'leaders-page__users')}>
          {leaders.map((user: any) => {
            leadersCounter++;
            if (user.id !== (me || { id: null }).id) {
              return (
                <div className={cn('row')}>
                  <div className={cn('row__col', 'row__col_index')}>
                    <span className={cn('circle')}>{`${leadersCounter}`}</span>
                  </div>
                  <div className={cn('row__col', 'row__col_user')}>
                    {user.nickname}
                  </div>
                  <div className={cn('row__col', 'row__col_rating')}>
                    {`${user.record}`}
                  </div>
                </div>
              );
            }
          })}
          {hasMore && (
            <div>
              <SimpleButton
                className={cn('leaders-page__load-button')}
                onClick={this.handleLoadNextPage}
                air={true}
              >
                Загрузить ещё
              </SimpleButton>
            </div>
          )}
        </div>
      </MainBlock>
    );
  }

  componentWillUnmount() {
    scoreboardStore.emit(actionScoreboardReset());
  }
}
