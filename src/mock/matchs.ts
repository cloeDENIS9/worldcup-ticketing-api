import { Match } from ":@domain/entities/Match";
import { stadiums } from "./stadiums";
import { teams } from "./teams";
import { MatchStage } from ":@domain/enums/MatchStage";
import { MatchStatus } from ":@domain/enums/MatchStatus";

// id homeTeam awayTeam homeScore awayScore homeScoreExtraTime awayScoreExtraTime homeScoreShootOut awayScoreShootOut stadium status stage date
export const matchs: Match[] = [
    new Match(1, teams[0], teams[1], 0, 0, 0, 0, 0, 0, stadiums[0], MatchStatus.SCHEDULED, MatchStage.GROUP, new Date("2026-06-10") ),
    new Match(2, teams[2], teams[3], 0, 0, 0, 0, 0, 0, stadiums[1], MatchStatus.SCHEDULED, MatchStage.GROUP, new Date("2026-06-11") ),
    new Match(3, teams[4], teams[5], 0, 0, 0, 0, 0, 0, stadiums[2], MatchStatus.SCHEDULED, MatchStage.GROUP, new Date("2026-06-12") )
];