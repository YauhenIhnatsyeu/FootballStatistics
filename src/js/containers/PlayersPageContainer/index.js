import { connect } from "react-redux";

import PlayersPage from "Pages/teamPage/pages/playersPage/PlayersPage";

const mapStateToProps = state => ({
    team: state.team,
});

export default
connect(mapStateToProps)(PlayersPage);