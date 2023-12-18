import axios from 'axios';

const API_BASE_URL = 'https://php74.appgo.pl/sport_api/api/public/api';

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getMatchesData = async (page: number, onPage: number, orderDirection: 'desc' | 'asc', orderBy: 'round'|'date'|'home_team'|'away_team'|'home_score'|'away_score') => {
  try {
    const response = await apiService.get(`/games?page=${page}&onPage=${onPage}&orderDirection=${orderDirection}&orderBy=${orderBy}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sport clubs:', error);
    throw error;
  }
};

export const getLeaderboardData = async () => {
  try {
    const response = await apiService.get('/table');
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error;
  }
};