import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFixtures, updateFixturesPageIndex } from "ActionCreators";

import FixturesSection from "FixturesPageSections/fixturesSection/FixturesSection";

const mapStateToProps = state => ({
    teamId: state.team.id,
    fixtures: state.fixtures,
    fixturesPageIndex: state.fixturesPageIndex,
    fetchingErrorOccured: state.fetchingErrorOccured,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchFixtures, updateFixturesPageIndex }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(FixturesSection);
