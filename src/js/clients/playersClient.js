import fetchUrl from "Helpers/ajaxHelper";

export default function* fetchTeams(players) {
    return yield fetchUrl(players);
}
