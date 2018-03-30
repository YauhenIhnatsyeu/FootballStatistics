import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    fetchFixtures,
    updateFixtureIndex,
    updateFixturesPageIndex,
} from "ActionCreators";

import FixturesPage from "Pages/teamPage/pages/fixturesPage/FixturesPage";

const mapStateToProps = state => ({
    fixtures: state.fixtures,
    fixtureIndex: state.fixtureIndex,
    fixturesPageIndex: state.fixturesPageIndex,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchFixtures,
        updateFixtureIndex,
        updateFixturesPageIndex,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(FixturesPage);
