import { MatchStage } from "../enums/MatchStage";
import { MatchStatus } from "../enums/MatchStatus";
import { Stadium } from "./Stadium";
import { Team } from "./Team";

export class Match{
    constructor( // id homeTeam awayTeam homeScore awayScore homeScoreExtraTime awayScoreExtraTime homeScoreShootOut awayScoreShootOut stadium status stage date
        public readonly id: number,
        public readonly homeTeam: Team,
        public readonly awayTeam: Team,
        public homeScore: number, // on doit pouvoir changer les score pendant le match
        public awayScore: number,
        public homeScoreExtraTime: number, // on doit pouvoir changer les score hors temps 
        public awayScoreExtraTime: number,
        public homeScoreShootOut: number,
        public awayScoreShootOut: number, // on doit pouvoir changer le numbre de tir au but de pas readonly
        public readonly stadium: Stadium,
        public readonly status: MatchStatus,
        public readonly stage: MatchStage,
        public readonly date: Date

    ) {
        if (homeScore && awayScore < 0) {
            throw new Error("Score have to be positive")
        }
        if (id <= 0) {
            throw new Error("id have to be positive")
        }
        if (homeTeam.name == awayTeam.name) {
            throw new Error("home team name can't be the same as away team")
        }
    }
}