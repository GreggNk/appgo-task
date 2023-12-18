export type SportsClubs = {
    id: number;
    name: string;
    image: string;
  };

export type Team = {
 team: SportsClubs;
 points: number; 
 goals_scored: number;
 goals_conceded: number;
 goals_ratio: number;
 games: number;
}

export type RoundsData = {
    id: number;
    round: number;
    date: string;
    home_team: string;
    away_team: string;
    home_score: number;
    away_score: number;
    home_team_object: SportsClubs;
    away_team_object: SportsClubs;
}
  