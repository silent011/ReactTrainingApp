import {connect} from 'react-redux'
import { clearRespMessage } from '../actions/toDoActions'
import InfoBox from '../components/InfoBox'

const mapStateToProps = state => ({
    msg: state.todosStore.ajaxResponse.msg
})

const mapDispatchToProps = dispatch => ({
    clearMessage: () => dispatch(clearRespMessage())
})


export default connect(mapStateToProps, mapDispatchToProps)(InfoBox)