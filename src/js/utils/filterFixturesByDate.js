export default function fiterFixturesByDate(fixtures, dates) {
    let { to } = dates;
    // 1 day - 86400000 milliseconds
    to = new Date(to.getTime() + 86400000);
    to.setHours(0, 0, 0, 0);

    return fixtures.filter((fixture) => {
        const fixtureDate = new Date(fixture.date);
        return fixtureDate >= dates.from && fixtureDate <= to;
    });
}
