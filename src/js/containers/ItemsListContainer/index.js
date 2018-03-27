import { connect } from "react-redux";

import ItemsList from "Components/ItemsList";

const mapStateToProps = state => ({
    itemsOnOnePageCount: state.itemsOnOnePageCount,
});

export default
connect(mapStateToProps)(ItemsList);
