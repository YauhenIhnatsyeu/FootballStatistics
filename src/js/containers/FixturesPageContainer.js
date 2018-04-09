import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    fetchFixtures,
    fetchHead2Head,
    updateFixtureIndex,
    updateFixturesPageIndex,
    updateDates,
} from "ActionCreators";

import FixturesPage from "Pages/teamPage/pages/fixturesPage/FixturesPage";

const mapStateToProps = state => ({
    fixtures: state.fixtures,
    fixturesFetchingErrorOccured: state.fixturesFetchingErrorOccured,
    head2HeadFetchingErrorOccured: state.head2HeadFetchingErrorOccured,
    fixtureIndex: state.fixtureIndex,
    fixturesPageIndex: state.fixturesPageIndex,
    head2Head: state.head2Head,
    dates: state.dates,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchFixtures,
        fetchHead2Head,
        updateFixtureIndex,
        updateFixturesPageIndex,
        updateDates,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(FixturesPage);
