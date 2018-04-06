import extractIdFromUrl from "Utilities/extractIdFromUrl";

function addIdToFixture(fixtureParam) {
    const fixture = fixtureParam;
    const fixtureId = extractIdFromUrl(fixture._links.self.href);
    fixture.id = fixtureId;
    return fixture;
}

export default function addIdsToFixtures(fixtures) {
    fixtures.map(fixture => addIdToFixture(fixture));
}
