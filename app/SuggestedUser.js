import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSuggestedUsers } from './actions/Actions'

class SuggestedUser extends React.Component{

  constructor(args){
    super(args)
    this.props.getSuggestedUsers()
  }

  render(){
    return(
      <aside id="suggestedUsers" className="twitter-panel">
        <span className="su-title">A quién seguir</span>
        <If condition={this.props.load} >
          <For each="user" of={this.props.users}>
            <div className="sg-item" key={user._id}>
              <div className="su-avatar">
                <img src={user.avatar} alt="Juan manuel"/>
              </div>
              <div className="sg-body">
                <div>
                  <Link to={"/" + user.userName}>
                    <span className="sg-name">{user.name}</span>
                    <span className="sg-username">@{user.userName}</span>
                  </Link>
                </div>
                <Link to={"/" + user.userName}
                  className="btn btn-primary btn-sm">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                      Ver perfil</Link>
              </div>
            </div>
          </For>
        </If>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    load: state.sugestedUserReducer.load,
    users: state.sugestedUserReducer.users
  }
}
export default connect(mapStateToProps, {getSuggestedUsers})(SuggestedUser);
