 interface Pelicula {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
  }
  
  export interface ApiResponse {
    docs: Pelicula[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
  }
  