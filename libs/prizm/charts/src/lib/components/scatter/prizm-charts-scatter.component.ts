import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Scatter } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-scatter',
  templateUrl: './prizm-charts-scatter.component.html',
  styleUrls: ['./prizm-charts-scatter.component.less'],
})
export class PrizmChartsScatterComponent<T extends Record<string, unknown>> implements OnInit {
    @Input()
    @prizmDefaultProp()
    data: unknown[] = [
      {
        "Title": "Guardians of the Galaxy",
        "Genre": "Action",
        "Revenue (Millions)": 333.13,
        "Rating": 8.1
      },
      {
        "Title": "Prometheus",
        "Genre": "Adventure",
        "Revenue (Millions)": 126.46,
        "Rating": 7
      },
      {
        "Title": "Split",
        "Genre": "Horror",
        "Revenue (Millions)": 138.12,
        "Rating": 7.3
      },
      {
        "Title": "Sing",
        "Genre": "Animation",
        "Revenue (Millions)": 270.32,
        "Rating": 7.2
      },
      {
        "Title": "Suicide Squad",
        "Genre": "Action",
        "Revenue (Millions)": 325.02,
        "Rating": 6.2
      },
      {
        "Title": "The Great Wall",
        "Genre": "Action",
        "Revenue (Millions)": 45.13,
        "Rating": 6.1
      },
      {
        "Title": "La La Land",
        "Genre": "Comedy",
        "Revenue (Millions)": 151.06,
        "Rating": 8.3
      },
      {
        "Title": "Mindhorn",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6.4
      },
      {
        "Title": "The Lost City of Z",
        "Genre": "Action",
        "Revenue (Millions)": 8.01,
        "Rating": 7.1
      },
      {
        "Title": "Passengers",
        "Genre": "Adventure",
        "Revenue (Millions)": 100.01,
        "Rating": 7
      },
      {
        "Title": "Fantastic Beasts and Where to Find Them",
        "Genre": "Adventure",
        "Revenue (Millions)": 234.02,
        "Rating": 7.5
      },
      {
        "Title": "Hidden Figures",
        "Genre": "Other",
        "Revenue (Millions)": 169.27,
        "Rating": 7.8
      },
      {
        "Title": "Rogue One",
        "Genre": "Action",
        "Revenue (Millions)": 532.17,
        "Rating": 7.9
      },
      {
        "Title": "Moana",
        "Genre": "Animation",
        "Revenue (Millions)": 248.75,
        "Rating": 7.7
      },
      {
        "Title": "Colossal",
        "Genre": "Action",
        "Revenue (Millions)": 2.87,
        "Rating": 6.4
      },
      {
        "Title": "The Secret Life of Pets",
        "Genre": "Animation",
        "Revenue (Millions)": 368.31,
        "Rating": 6.6
      },
      {
        "Title": "Hacksaw Ridge",
        "Genre": "Other",
        "Revenue (Millions)": 67.12,
        "Rating": 8.2
      },
      {
        "Title": "Jason Bourne",
        "Genre": "Action",
        "Revenue (Millions)": 162.16,
        "Rating": 6.7
      },
      {
        "Title": "Lion",
        "Genre": "Other",
        "Revenue (Millions)": 51.69,
        "Rating": 8.1
      },
      {
        "Title": "Gold",
        "Genre": "Adventure",
        "Revenue (Millions)": 7.22,
        "Rating": 6.7
      },
      {
        "Title": "Hounds of Love",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.7
      },
      {
        "Title": "Trolls",
        "Genre": "Animation",
        "Revenue (Millions)": 153.69,
        "Rating": 6.5
      },
      {
        "Title": "Independence Day: Resurgence",
        "Genre": "Action",
        "Revenue (Millions)": 103.14,
        "Rating": 5.3
      },
      {
        "Title": "Paris pieds nus",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6.8
      },
      {
        "Title": "Bahubali: The Beginning",
        "Genre": "Action",
        "Revenue (Millions)": 6.5,
        "Rating": 8.3
      },
      {
        "Title": "Dead Awake",
        "Genre": "Horror",
        "Revenue (Millions)": 0.01,
        "Rating": 4.7
      },
      {
        "Title": "Bad Moms",
        "Genre": "Comedy",
        "Revenue (Millions)": 113.08,
        "Rating": 6.2
      },
      {
        "Title": "Assassin's Creed",
        "Genre": "Action",
        "Revenue (Millions)": 54.65,
        "Rating": 5.9
      },
      {
        "Title": "Why Him?",
        "Genre": "Comedy",
        "Revenue (Millions)": 60.31,
        "Rating": 6.3
      },
      {
        "Title": "X-Men: Apocalypse",
        "Genre": "Action",
        "Revenue (Millions)": 155.33,
        "Rating": 7.1
      },
      {
        "Title": "Deadpool",
        "Genre": "Action",
        "Revenue (Millions)": 363.02,
        "Rating": 8
      },
      {
        "Title": "Resident Evil: The Final Chapter",
        "Genre": "Action",
        "Revenue (Millions)": 26.84,
        "Rating": 5.6
      },
      {
        "Title": "Captain America: Civil War",
        "Genre": "Action",
        "Revenue (Millions)": 408.08,
        "Rating": 7.9
      },
      {
        "Title": "Interstellar",
        "Genre": "Adventure",
        "Revenue (Millions)": 187.99,
        "Rating": 8.6
      },
      {
        "Title": "Doctor Strange",
        "Genre": "Action",
        "Revenue (Millions)": 232.6,
        "Rating": 7.6
      },
      {
        "Title": "The Magnificent Seven",
        "Genre": "Action",
        "Revenue (Millions)": 93.38,
        "Rating": 6.9
      },
      {
        "Title": "5- 25- 77",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 7.1
      },
      {
        "Title": "Sausage Party",
        "Genre": "Animation",
        "Revenue (Millions)": 97.66,
        "Rating": 6.3
      },
      {
        "Title": "Moonlight",
        "Genre": "Other",
        "Revenue (Millions)": 27.85,
        "Rating": 7.5
      },
      {
        "Title": "Don't Fuck in the Woods",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 2.7
      },
      {
        "Title": "The Founder",
        "Genre": "Other",
        "Revenue (Millions)": 12.79,
        "Rating": 7.2
      },
      {
        "Title": "Lowriders",
        "Genre": "Other",
        "Revenue (Millions)": 4.21,
        "Rating": 6.3
      },
      {
        "Title": "Pirates of the Caribbean: On Stranger Tides",
        "Genre": "Action",
        "Revenue (Millions)": 241.06,
        "Rating": 6.7
      },
      {
        "Title": "Miss Sloane",
        "Genre": "Other",
        "Revenue (Millions)": 3.44,
        "Rating": 7.3
      },
      {
        "Title": "Fallen",
        "Genre": "Adventure",
        "Revenue (Millions)": null,
        "Rating": 5.6
      },
      {
        "Title": "Star Trek Beyond",
        "Genre": "Action",
        "Revenue (Millions)": 158.8,
        "Rating": 7.1
      },
      {
        "Title": "The Last Face",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 3.7
      },
      {
        "Title": "Star Wars: Episode VII - The Force Awakens",
        "Genre": "Action",
        "Revenue (Millions)": 936.63,
        "Rating": 8.1
      },
      {
        "Title": "Underworld: Blood Wars",
        "Genre": "Action",
        "Revenue (Millions)": 30.35,
        "Rating": 5.8
      },
      {
        "Title": "Mother's Day",
        "Genre": "Comedy",
        "Revenue (Millions)": 32.46,
        "Rating": 5.6
      },
      {
        "Title": "John Wick",
        "Genre": "Action",
        "Revenue (Millions)": 43,
        "Rating": 7.2
      },
      {
        "Title": "The Dark Knight",
        "Genre": "Action",
        "Revenue (Millions)": 533.32,
        "Rating": 9
      },
      {
        "Title": "Silence",
        "Genre": "Adventure",
        "Revenue (Millions)": 7.08,
        "Rating": 7.3
      },
      {
        "Title": "Don't Breathe",
        "Genre": "Crime",
        "Revenue (Millions)": 89.21,
        "Rating": 7.2
      },
      {
        "Title": "Me Before You",
        "Genre": "Other",
        "Revenue (Millions)": 56.23,
        "Rating": 7.4
      },
      {
        "Title": "Their Finest",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.18,
        "Rating": 7
      },
      {
        "Title": "Sully",
        "Genre": "Other",
        "Revenue (Millions)": 125.07,
        "Rating": 7.5
      },
      {
        "Title": "Batman v Superman: Dawn of Justice",
        "Genre": "Action",
        "Revenue (Millions)": 330.25,
        "Rating": 6.7
      },
      {
        "Title": "The Autopsy of Jane Doe",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 6.8
      },
      {
        "Title": "The Girl on the Train",
        "Genre": "Crime",
        "Revenue (Millions)": 75.31,
        "Rating": 6.5
      },
      {
        "Title": "Fifty Shades of Grey",
        "Genre": "Other",
        "Revenue (Millions)": 166.15,
        "Rating": 4.1
      },
      {
        "Title": "The Prestige",
        "Genre": "Other",
        "Revenue (Millions)": 53.08,
        "Rating": 8.5
      },
      {
        "Title": "Kingsman: The Secret Service",
        "Genre": "Action",
        "Revenue (Millions)": 128.25,
        "Rating": 7.7
      },
      {
        "Title": "Patriots Day",
        "Genre": "Other",
        "Revenue (Millions)": 31.86,
        "Rating": 7.4
      },
      {
        "Title": "Mad Max: Fury Road",
        "Genre": "Action",
        "Revenue (Millions)": 153.63,
        "Rating": 8.1
      },
      {
        "Title": "Wakefield",
        "Genre": "Other",
        "Revenue (Millions)": 0.01,
        "Rating": 7.5
      },
      {
        "Title": "Deepwater Horizon",
        "Genre": "Action",
        "Revenue (Millions)": 61.28,
        "Rating": 7.2
      },
      {
        "Title": "The Promise",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.9
      },
      {
        "Title": "Allied",
        "Genre": "Action",
        "Revenue (Millions)": 40.07,
        "Rating": 7.1
      },
      {
        "Title": "A Monster Calls",
        "Genre": "Other",
        "Revenue (Millions)": 3.73,
        "Rating": 7.5
      },
      {
        "Title": "Collateral Beauty",
        "Genre": "Other",
        "Revenue (Millions)": 30.98,
        "Rating": 6.8
      },
      {
        "Title": "Zootopia",
        "Genre": "Animation",
        "Revenue (Millions)": 341.26,
        "Rating": 8.1
      },
      {
        "Title": "Pirates of the Caribbean: At World's End",
        "Genre": "Action",
        "Revenue (Millions)": 309.4,
        "Rating": 7.1
      },
      {
        "Title": "The Avengers",
        "Genre": "Action",
        "Revenue (Millions)": 623.28,
        "Rating": 8.1
      },
      {
        "Title": "Inglourious Basterds",
        "Genre": "Adventure",
        "Revenue (Millions)": 120.52,
        "Rating": 8.3
      },
      {
        "Title": "Pirates of the Caribbean: Dead Man's Chest",
        "Genre": "Action",
        "Revenue (Millions)": 423.03,
        "Rating": 7.3
      },
      {
        "Title": "Ghostbusters",
        "Genre": "Action",
        "Revenue (Millions)": 128.34,
        "Rating": 5.3
      },
      {
        "Title": "Inception",
        "Genre": "Action",
        "Revenue (Millions)": 292.57,
        "Rating": 8.8
      },
      {
        "Title": "Captain Fantastic",
        "Genre": "Comedy",
        "Revenue (Millions)": 5.88,
        "Rating": 7.9
      },
      {
        "Title": "The Wolf of Wall Street",
        "Genre": "Other",
        "Revenue (Millions)": 116.87,
        "Rating": 8.2
      },
      {
        "Title": "Gone Girl",
        "Genre": "Crime",
        "Revenue (Millions)": 167.74,
        "Rating": 8.1
      },
      {
        "Title": "Furious Seven",
        "Genre": "Action",
        "Revenue (Millions)": 350.03,
        "Rating": 7.2
      },
      {
        "Title": "Jurassic World",
        "Genre": "Action",
        "Revenue (Millions)": 652.18,
        "Rating": 7
      },
      {
        "Title": "Live by Night",
        "Genre": "Crime",
        "Revenue (Millions)": 10.38,
        "Rating": 6.4
      },
      {
        "Title": "Avatar",
        "Genre": "Action",
        "Revenue (Millions)": 760.51,
        "Rating": 7.8
      },
      {
        "Title": "The Hateful Eight",
        "Genre": "Crime",
        "Revenue (Millions)": 54.12,
        "Rating": 7.8
      },
      {
        "Title": "The Accountant",
        "Genre": "Action",
        "Revenue (Millions)": 86.2,
        "Rating": 7.4
      },
      {
        "Title": "Prisoners",
        "Genre": "Crime",
        "Revenue (Millions)": 60.96,
        "Rating": 8.1
      },
      {
        "Title": "Warcraft",
        "Genre": "Action",
        "Revenue (Millions)": 47.17,
        "Rating": 7
      },
      {
        "Title": "The Help",
        "Genre": "Other",
        "Revenue (Millions)": 169.71,
        "Rating": 8.1
      },
      {
        "Title": "War Dogs",
        "Genre": "Comedy",
        "Revenue (Millions)": 43.02,
        "Rating": 7.1
      },
      {
        "Title": "Avengers: Age of Ultron",
        "Genre": "Action",
        "Revenue (Millions)": 458.99,
        "Rating": 7.4
      },
      {
        "Title": "The Nice Guys",
        "Genre": "Action",
        "Revenue (Millions)": 36.25,
        "Rating": 7.4
      },
      {
        "Title": "Kimi no na wa",
        "Genre": "Animation",
        "Revenue (Millions)": 4.68,
        "Rating": 8.6
      },
      {
        "Title": "The Void",
        "Genre": "Horror",
        "Revenue (Millions)": 0.15,
        "Rating": 5.8
      },
      {
        "Title": "Personal Shopper",
        "Genre": "Other",
        "Revenue (Millions)": 1.29,
        "Rating": 6.3
      },
      {
        "Title": "The Departed",
        "Genre": "Crime",
        "Revenue (Millions)": 132.37,
        "Rating": 8.5
      },
      {
        "Title": "Legend",
        "Genre": "Other",
        "Revenue (Millions)": 1.87,
        "Rating": 7
      },
      {
        "Title": "Thor",
        "Genre": "Action",
        "Revenue (Millions)": 181.02,
        "Rating": 7
      },
      {
        "Title": "The Martian",
        "Genre": "Adventure",
        "Revenue (Millions)": 228.43,
        "Rating": 8
      },
      {
        "Title": "Contratiempo",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 7.9
      },
      {
        "Title": "The Man from U.N.C.L.E.",
        "Genre": "Action",
        "Revenue (Millions)": 45.43,
        "Rating": 7.3
      },
      {
        "Title": "Hell or High Water",
        "Genre": "Crime",
        "Revenue (Millions)": 26.86,
        "Rating": 7.7
      },
      {
        "Title": "The Comedian",
        "Genre": "Comedy",
        "Revenue (Millions)": 1.66,
        "Rating": 5.4
      },
      {
        "Title": "The Legend of Tarzan",
        "Genre": "Action",
        "Revenue (Millions)": 126.59,
        "Rating": 6.3
      },
      {
        "Title": "All We Had",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.8
      },
      {
        "Title": "Ex Machina",
        "Genre": "Other",
        "Revenue (Millions)": 25.44,
        "Rating": 7.7
      },
      {
        "Title": "The Belko Experiment",
        "Genre": "Action",
        "Revenue (Millions)": 10.16,
        "Rating": 6.3
      },
      {
        "Title": "12 Years a Slave",
        "Genre": "Other",
        "Revenue (Millions)": 56.67,
        "Rating": 8.1
      },
      {
        "Title": "The Bad Batch",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": 300,
        "Genre": "Action",
        "Revenue (Millions)": 210.59,
        "Rating": 7.7
      },
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Genre": "Adventure",
        "Revenue (Millions)": 380.96,
        "Rating": 8.1
      },
      {
        "Title": "Office Christmas Party",
        "Genre": "Comedy",
        "Revenue (Millions)": 54.73,
        "Rating": 5.8
      },
      {
        "Title": "The Neon Demon",
        "Genre": "Horror",
        "Revenue (Millions)": 1.33,
        "Rating": 6.2
      },
      {
        "Title": "Dangal",
        "Genre": "Action",
        "Revenue (Millions)": 11.15,
        "Rating": 8.8
      },
      {
        "Title": "10 Cloverfield Lane",
        "Genre": "Other",
        "Revenue (Millions)": 71.9,
        "Rating": 7.2
      },
      {
        "Title": "Finding Dory",
        "Genre": "Animation",
        "Revenue (Millions)": 486.29,
        "Rating": 7.4
      },
      {
        "Title": "Miss Peregrine's Home for Peculiar Children",
        "Genre": "Adventure",
        "Revenue (Millions)": 87.24,
        "Rating": 6.7
      },
      {
        "Title": "Divergent",
        "Genre": "Adventure",
        "Revenue (Millions)": 150.83,
        "Rating": 6.7
      },
      {
        "Title": "Mike and Dave Need Wedding Dates",
        "Genre": "Adventure",
        "Revenue (Millions)": 46.01,
        "Rating": 6
      },
      {
        "Title": "Boyka: Undisputed IV",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 7.4
      },
      {
        "Title": "The Dark Knight Rises",
        "Genre": "Action",
        "Revenue (Millions)": 448.13,
        "Rating": 8.5
      },
      {
        "Title": "The Jungle Book",
        "Genre": "Adventure",
        "Revenue (Millions)": 364,
        "Rating": 7.5
      },
      {
        "Title": "Transformers: Age of Extinction",
        "Genre": "Action",
        "Revenue (Millions)": 245.43,
        "Rating": 5.7
      },
      {
        "Title": "Nerve",
        "Genre": "Adventure",
        "Revenue (Millions)": 38.56,
        "Rating": 6.6
      },
      {
        "Title": "Mamma Mia!",
        "Genre": "Comedy",
        "Revenue (Millions)": 143.7,
        "Rating": 6.4
      },
      {
        "Title": "The Revenant",
        "Genre": "Adventure",
        "Revenue (Millions)": 183.64,
        "Rating": 8
      },
      {
        "Title": "Fences",
        "Genre": "Other",
        "Revenue (Millions)": 57.64,
        "Rating": 7.3
      },
      {
        "Title": "Into the Woods",
        "Genre": "Adventure",
        "Revenue (Millions)": 128,
        "Rating": 6
      },
      {
        "Title": "The Shallows",
        "Genre": "Other",
        "Revenue (Millions)": 55.12,
        "Rating": 6.4
      },
      {
        "Title": "Whiplash",
        "Genre": "Other",
        "Revenue (Millions)": 13.09,
        "Rating": 8.5
      },
      {
        "Title": "Furious 6",
        "Genre": "Action",
        "Revenue (Millions)": 238.67,
        "Rating": 7.1
      },
      {
        "Title": "The Place Beyond the Pines",
        "Genre": "Crime",
        "Revenue (Millions)": 21.38,
        "Rating": 7.3
      },
      {
        "Title": "No Country for Old Men",
        "Genre": "Crime",
        "Revenue (Millions)": 74.27,
        "Rating": 8.1
      },
      {
        "Title": "The Great Gatsby",
        "Genre": "Other",
        "Revenue (Millions)": 144.81,
        "Rating": 7.3
      },
      {
        "Title": "Shutter Island",
        "Genre": "Other",
        "Revenue (Millions)": 127.97,
        "Rating": 8.1
      },
      {
        "Title": "Brimstone",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.1
      },
      {
        "Title": "Star Trek",
        "Genre": "Action",
        "Revenue (Millions)": 257.7,
        "Rating": 8
      },
      {
        "Title": "Diary of a Wimpy Kid",
        "Genre": "Comedy",
        "Revenue (Millions)": 64,
        "Rating": 6.2
      },
      {
        "Title": "The Big Short",
        "Genre": "Other",
        "Revenue (Millions)": 70.24,
        "Rating": 7.8
      },
      {
        "Title": "Room",
        "Genre": "Other",
        "Revenue (Millions)": 14.68,
        "Rating": 8.2
      },
      {
        "Title": "Django Unchained",
        "Genre": "Other",
        "Revenue (Millions)": 162.8,
        "Rating": 8.4
      },
      {
        "Title": "Ah-ga-ssi",
        "Genre": "Other",
        "Revenue (Millions)": 2.01,
        "Rating": 8.1
      },
      {
        "Title": "The Edge of Seventeen",
        "Genre": "Comedy",
        "Revenue (Millions)": 14.26,
        "Rating": 7.4
      },
      {
        "Title": "Watchmen",
        "Genre": "Action",
        "Revenue (Millions)": 107.5,
        "Rating": 7.6
      },
      {
        "Title": "Superbad",
        "Genre": "Comedy",
        "Revenue (Millions)": 121.46,
        "Rating": 7.6
      },
      {
        "Title": "Inferno",
        "Genre": "Action",
        "Revenue (Millions)": 34.26,
        "Rating": 6.2
      },
      {
        "Title": "The BFG",
        "Genre": "Adventure",
        "Revenue (Millions)": 55.47,
        "Rating": 6.4
      },
      {
        "Title": "The Hunger Games",
        "Genre": "Adventure",
        "Revenue (Millions)": 408,
        "Rating": 7.2
      },
      {
        "Title": "White Girl",
        "Genre": "Other",
        "Revenue (Millions)": 0.2,
        "Rating": 5.8
      },
      {
        "Title": "Sicario",
        "Genre": "Action",
        "Revenue (Millions)": 46.88,
        "Rating": 7.6
      },
      {
        "Title": "Twin Peaks: The Missing Pieces",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 8.1
      },
      {
        "Title": "Aliens vs Predator - Requiem",
        "Genre": "Action",
        "Revenue (Millions)": 41.8,
        "Rating": 4.7
      },
      {
        "Title": "Pacific Rim",
        "Genre": "Action",
        "Revenue (Millions)": 101.79,
        "Rating": 7
      },
      {
        "Title": "Crazy, Stupid, Love.",
        "Genre": "Comedy",
        "Revenue (Millions)": 84.24,
        "Rating": 7.4
      },
      {
        "Title": "Scott Pilgrim vs. the World",
        "Genre": "Action",
        "Revenue (Millions)": 31.49,
        "Rating": 7.5
      },
      {
        "Title": "Hot Fuzz",
        "Genre": "Action",
        "Revenue (Millions)": 23.62,
        "Rating": 7.9
      },
      {
        "Title": "Mine",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6
      },
      {
        "Title": "Free Fire",
        "Genre": "Action",
        "Revenue (Millions)": 1.8,
        "Rating": 7
      },
      {
        "Title": "X-Men: Days of Future Past",
        "Genre": "Action",
        "Revenue (Millions)": 233.91,
        "Rating": 8
      },
      {
        "Title": "Jack Reacher: Never Go Back",
        "Genre": "Action",
        "Revenue (Millions)": 58.4,
        "Rating": 6.1
      },
      {
        "Title": "Casino Royale",
        "Genre": "Action",
        "Revenue (Millions)": 167.01,
        "Rating": 8
      },
      {
        "Title": "Twilight",
        "Genre": "Other",
        "Revenue (Millions)": 191.45,
        "Rating": 5.2
      },
      {
        "Title": "Now You See Me 2",
        "Genre": "Action",
        "Revenue (Millions)": 65.03,
        "Rating": 6.5
      },
      {
        "Title": "Woman in Gold",
        "Genre": "Other",
        "Revenue (Millions)": 33.31,
        "Rating": 7.3
      },
      {
        "Title": "13 Hours",
        "Genre": "Action",
        "Revenue (Millions)": 52.82,
        "Rating": 7.3
      },
      {
        "Title": "Spectre",
        "Genre": "Action",
        "Revenue (Millions)": 200.07,
        "Rating": 6.8
      },
      {
        "Title": "Nightcrawler",
        "Genre": "Crime",
        "Revenue (Millions)": 32.28,
        "Rating": 7.9
      },
      {
        "Title": "Kubo and the Two Strings",
        "Genre": "Animation",
        "Revenue (Millions)": 48.02,
        "Rating": 7.9
      },
      {
        "Title": "Beyond the Gates",
        "Genre": "Adventure",
        "Revenue (Millions)": null,
        "Rating": 5.2
      },
      {
        "Title": "Her",
        "Genre": "Other",
        "Revenue (Millions)": 25.56,
        "Rating": 8
      },
      {
        "Title": "Frozen",
        "Genre": "Animation",
        "Revenue (Millions)": 400.74,
        "Rating": 7.5
      },
      {
        "Title": "Tomorrowland",
        "Genre": "Action",
        "Revenue (Millions)": 93.42,
        "Rating": 6.5
      },
      {
        "Title": "Dawn of the Planet of the Apes",
        "Genre": "Action",
        "Revenue (Millions)": 208.54,
        "Rating": 7.6
      },
      {
        "Title": "Tropic Thunder",
        "Genre": "Action",
        "Revenue (Millions)": 110.42,
        "Rating": 7
      },
      {
        "Title": "The Conjuring 2",
        "Genre": "Horror",
        "Revenue (Millions)": 102.46,
        "Rating": 7.4
      },
      {
        "Title": "Ant-Man",
        "Genre": "Action",
        "Revenue (Millions)": 180.19,
        "Rating": 7.3
      },
      {
        "Title": "Bridget Jones's Baby",
        "Genre": "Comedy",
        "Revenue (Millions)": 24.09,
        "Rating": 6.7
      },
      {
        "Title": "The VVitch: A New-England Folktale",
        "Genre": "Horror",
        "Revenue (Millions)": 25.14,
        "Rating": 6.8
      },
      {
        "Title": "Cinderella",
        "Genre": "Other",
        "Revenue (Millions)": 201.15,
        "Rating": 7
      },
      {
        "Title": "Realive",
        "Genre": "Sci-Fi",
        "Revenue (Millions)": null,
        "Rating": 5.9
      },
      {
        "Title": "Forushande",
        "Genre": "Other",
        "Revenue (Millions)": 3.4,
        "Rating": 8
      },
      {
        "Title": "Love",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6
      },
      {
        "Title": "Billy Lynn's Long Halftime Walk",
        "Genre": "Other",
        "Revenue (Millions)": 1.72,
        "Rating": 6.3
      },
      {
        "Title": "Crimson Peak",
        "Genre": "Other",
        "Revenue (Millions)": 31.06,
        "Rating": 6.6
      },
      {
        "Title": "Drive",
        "Genre": "Crime",
        "Revenue (Millions)": 35.05,
        "Rating": 7.8
      },
      {
        "Title": "Trainwreck",
        "Genre": "Comedy",
        "Revenue (Millions)": 110.01,
        "Rating": 6.3
      },
      {
        "Title": "The Light Between Oceans",
        "Genre": "Other",
        "Revenue (Millions)": 12.53,
        "Rating": 7.2
      },
      {
        "Title": "Below Her Mouth",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.6
      },
      {
        "Title": "Spotlight",
        "Genre": "Crime",
        "Revenue (Millions)": 44.99,
        "Rating": 8.1
      },
      {
        "Title": "Morgan",
        "Genre": "Horror",
        "Revenue (Millions)": 3.91,
        "Rating": 5.8
      },
      {
        "Title": "Warrior",
        "Genre": "Action",
        "Revenue (Millions)": 13.65,
        "Rating": 8.2
      },
      {
        "Title": "Captain America: The First Avenger",
        "Genre": "Action",
        "Revenue (Millions)": 176.64,
        "Rating": 6.9
      },
      {
        "Title": "Hacker",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.3
      },
      {
        "Title": "Into the Wild",
        "Genre": "Adventure",
        "Revenue (Millions)": 18.35,
        "Rating": 8.1
      },
      {
        "Title": "The Imitation Game",
        "Genre": "Other",
        "Revenue (Millions)": 91.12,
        "Rating": 8.1
      },
      {
        "Title": "Central Intelligence",
        "Genre": "Action",
        "Revenue (Millions)": 127.38,
        "Rating": 6.3
      },
      {
        "Title": "Edge of Tomorrow",
        "Genre": "Action",
        "Revenue (Millions)": 100.19,
        "Rating": 7.9
      },
      {
        "Title": "A Cure for Wellness",
        "Genre": "Other",
        "Revenue (Millions)": 8.1,
        "Rating": 6.5
      },
      {
        "Title": "Snowden",
        "Genre": "Other",
        "Revenue (Millions)": 21.48,
        "Rating": 7.3
      },
      {
        "Title": "Iron Man",
        "Genre": "Action",
        "Revenue (Millions)": 318.3,
        "Rating": 7.9
      },
      {
        "Title": "Allegiant",
        "Genre": "Action",
        "Revenue (Millions)": 66,
        "Rating": 5.7
      },
      {
        "Title": "X: First Class",
        "Genre": "Action",
        "Revenue (Millions)": 146.41,
        "Rating": 7.8
      },
      {
        "Title": "Raw (II)",
        "Genre": "Other",
        "Revenue (Millions)": 0.51,
        "Rating": 7.5
      },
      {
        "Title": "Paterson",
        "Genre": "Comedy",
        "Revenue (Millions)": 2.14,
        "Rating": 7.5
      },
      {
        "Title": "Bridesmaids",
        "Genre": "Comedy",
        "Revenue (Millions)": 169.08,
        "Rating": 6.8
      },
      {
        "Title": "The Girl with All the Gifts",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.7
      },
      {
        "Title": "San Andreas",
        "Genre": "Action",
        "Revenue (Millions)": 155.18,
        "Rating": 6.1
      },
      {
        "Title": "Spring Breakers",
        "Genre": "Other",
        "Revenue (Millions)": 14.12,
        "Rating": 5.3
      },
      {
        "Title": "Transformers",
        "Genre": "Action",
        "Revenue (Millions)": 318.76,
        "Rating": 7.1
      },
      {
        "Title": "Old Boy",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 5.8
      },
      {
        "Title": "Thor: The Dark World",
        "Genre": "Action",
        "Revenue (Millions)": 206.36,
        "Rating": 7
      },
      {
        "Title": "Gods of Egypt",
        "Genre": "Action",
        "Revenue (Millions)": 31.14,
        "Rating": 5.5
      },
      {
        "Title": "Captain America: The Winter Soldier",
        "Genre": "Action",
        "Revenue (Millions)": 259.75,
        "Rating": 7.8
      },
      {
        "Title": "Monster Trucks",
        "Genre": "Action",
        "Revenue (Millions)": 33.04,
        "Rating": 5.7
      },
      {
        "Title": "A Dark Song",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "Kick-Ass",
        "Genre": "Action",
        "Revenue (Millions)": 48.04,
        "Rating": 7.7
      },
      {
        "Title": "Hardcore Henry",
        "Genre": "Action",
        "Revenue (Millions)": 9.24,
        "Rating": 6.7
      },
      {
        "Title": "Cars",
        "Genre": "Animation",
        "Revenue (Millions)": 244.05,
        "Rating": 7.1
      },
      {
        "Title": "It Follows",
        "Genre": "Horror",
        "Revenue (Millions)": 14.67,
        "Rating": 6.9
      },
      {
        "Title": "The Girl with the Dragon Tattoo",
        "Genre": "Crime",
        "Revenue (Millions)": 102.52,
        "Rating": 7.8
      },
      {
        "Title": "We're the Millers",
        "Genre": "Comedy",
        "Revenue (Millions)": 150.37,
        "Rating": 7
      },
      {
        "Title": "American Honey",
        "Genre": "Other",
        "Revenue (Millions)": 0.66,
        "Rating": 7
      },
      {
        "Title": "The Lobster",
        "Genre": "Comedy",
        "Revenue (Millions)": 8.7,
        "Rating": 7.1
      },
      {
        "Title": "Predators",
        "Genre": "Action",
        "Revenue (Millions)": 52,
        "Rating": 6.4
      },
      {
        "Title": "Maleficent",
        "Genre": "Action",
        "Revenue (Millions)": 241.41,
        "Rating": 7
      },
      {
        "Title": "Rupture",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 4.8
      },
      {
        "Title": "Pan's Labyrinth",
        "Genre": "Other",
        "Revenue (Millions)": 37.62,
        "Rating": 8.2
      },
      {
        "Title": "A Kind of Murder",
        "Genre": "Crime",
        "Revenue (Millions)": 0,
        "Rating": 5.2
      },
      {
        "Title": "Apocalypto",
        "Genre": "Action",
        "Revenue (Millions)": 50.86,
        "Rating": 7.8
      },
      {
        "Title": "Mission: Impossible - Rogue Nation",
        "Genre": "Action",
        "Revenue (Millions)": 195,
        "Rating": 7.4
      },
      {
        "Title": "The Huntsman: Winter's War",
        "Genre": "Action",
        "Revenue (Millions)": 47.95,
        "Rating": 6.1
      },
      {
        "Title": "The Perks of Being a Wallflower",
        "Genre": "Other",
        "Revenue (Millions)": 17.74,
        "Rating": 8
      },
      {
        "Title": "Jackie",
        "Genre": "Other",
        "Revenue (Millions)": 13.96,
        "Rating": 6.8
      },
      {
        "Title": "The Disappointments Room",
        "Genre": "Other",
        "Revenue (Millions)": 2.41,
        "Rating": 3.9
      },
      {
        "Title": "The Grand Budapest Hotel",
        "Genre": "Adventure",
        "Revenue (Millions)": 59.07,
        "Rating": 8.1
      },
      {
        "Title": "The Host",
        "Genre": "Action",
        "Revenue (Millions)": 26.62,
        "Rating": 5.9
      },
      {
        "Title": "Fury",
        "Genre": "Action",
        "Revenue (Millions)": 85.71,
        "Rating": 7.6
      },
      {
        "Title": "Inside Out",
        "Genre": "Animation",
        "Revenue (Millions)": 356.45,
        "Rating": 8.2
      },
      {
        "Title": "Rock Dog",
        "Genre": "Animation",
        "Revenue (Millions)": 9.4,
        "Rating": 5.8
      },
      {
        "Title": "Terminator Genisys",
        "Genre": "Action",
        "Revenue (Millions)": 89.73,
        "Rating": 6.5
      },
      {
        "Title": "Percy Jackson & the Olympians: The Lightning Thief",
        "Genre": "Adventure",
        "Revenue (Millions)": 88.76,
        "Rating": 5.9
      },
      {
        "Title": "Les Misérables",
        "Genre": "Other",
        "Revenue (Millions)": 148.78,
        "Rating": 7.6
      },
      {
        "Title": "Children of Men",
        "Genre": "Other",
        "Revenue (Millions)": 35.29,
        "Rating": 7.9
      },
      {
        "Title": "20th Century Women",
        "Genre": "Comedy",
        "Revenue (Millions)": 5.66,
        "Rating": 7.4
      },
      {
        "Title": "Spy",
        "Genre": "Action",
        "Revenue (Millions)": 110.82,
        "Rating": 7.1
      },
      {
        "Title": "The Intouchables",
        "Genre": "Other",
        "Revenue (Millions)": 13.18,
        "Rating": 8.6
      },
      {
        "Title": "Bonjour Anne",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.32,
        "Rating": 4.9
      },
      {
        "Title": "Kynodontas",
        "Genre": "Other",
        "Revenue (Millions)": 0.11,
        "Rating": 7.3
      },
      {
        "Title": "Straight Outta Compton",
        "Genre": "Other",
        "Revenue (Millions)": 161.03,
        "Rating": 7.9
      },
      {
        "Title": "The Amazing Spider-Man 2",
        "Genre": "Action",
        "Revenue (Millions)": 202.85,
        "Rating": 6.7
      },
      {
        "Title": "The Conjuring",
        "Genre": "Horror",
        "Revenue (Millions)": 137.39,
        "Rating": 7.5
      },
      {
        "Title": "The Hangover",
        "Genre": "Comedy",
        "Revenue (Millions)": 277.31,
        "Rating": 7.8
      },
      {
        "Title": "Battleship",
        "Genre": "Action",
        "Revenue (Millions)": 65.17,
        "Rating": 5.8
      },
      {
        "Title": "Rise of the Planet of the Apes",
        "Genre": "Action",
        "Revenue (Millions)": 176.74,
        "Rating": 7.6
      },
      {
        "Title": "Lights Out",
        "Genre": "Horror",
        "Revenue (Millions)": 67.24,
        "Rating": 6.4
      },
      {
        "Title": "Norman: The Moderate Rise and Tragic Fall of a New York Fixer",
        "Genre": "Other",
        "Revenue (Millions)": 2.27,
        "Rating": 7.1
      },
      {
        "Title": "Birdman or (The Unexpected Virtue of Ignorance)",
        "Genre": "Comedy",
        "Revenue (Millions)": 42.34,
        "Rating": 7.8
      },
      {
        "Title": "Black Swan",
        "Genre": "Other",
        "Revenue (Millions)": 106.95,
        "Rating": 8
      },
      {
        "Title": "Dear White People",
        "Genre": "Comedy",
        "Revenue (Millions)": 4.4,
        "Rating": 6.2
      },
      {
        "Title": "Nymphomaniac: Vol. I",
        "Genre": "Other",
        "Revenue (Millions)": 0.79,
        "Rating": 7
      },
      {
        "Title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
        "Genre": "Action",
        "Revenue (Millions)": 0.54,
        "Rating": 6
      },
      {
        "Title": "Knock Knock",
        "Genre": "Other",
        "Revenue (Millions)": 0.03,
        "Rating": 4.9
      },
      {
        "Title": "Dirty Grandpa",
        "Genre": "Comedy",
        "Revenue (Millions)": 35.54,
        "Rating": 6
      },
      {
        "Title": "Cloud Atlas",
        "Genre": "Other",
        "Revenue (Millions)": 27.1,
        "Rating": 7.5
      },
      {
        "Title": "X-Men Origins: Wolverine",
        "Genre": "Action",
        "Revenue (Millions)": 179.88,
        "Rating": 6.7
      },
      {
        "Title": "Satanic",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 3.7
      },
      {
        "Title": "Skyfall",
        "Genre": "Action",
        "Revenue (Millions)": 304.36,
        "Rating": 7.8
      },
      {
        "Title": "The Hobbit: An Unexpected Journey",
        "Genre": "Adventure",
        "Revenue (Millions)": 303,
        "Rating": 7.9
      },
      {
        "Title": "21 Jump Street",
        "Genre": "Action",
        "Revenue (Millions)": 138.45,
        "Rating": 7.2
      },
      {
        "Title": "Sing Street",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.23,
        "Rating": 8
      },
      {
        "Title": "Ballerina",
        "Genre": "Animation",
        "Revenue (Millions)": null,
        "Rating": 6.8
      },
      {
        "Title": "Oblivion",
        "Genre": "Action",
        "Revenue (Millions)": 89.02,
        "Rating": 7
      },
      {
        "Title": "22 Jump Street",
        "Genre": "Action",
        "Revenue (Millions)": 191.62,
        "Rating": 7.1
      },
      {
        "Title": "Zodiac",
        "Genre": "Crime",
        "Revenue (Millions)": 33.05,
        "Rating": 7.7
      },
      {
        "Title": "Everybody Wants Some!!",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.37,
        "Rating": 7
      },
      {
        "Title": "Iron Man Three",
        "Genre": "Action",
        "Revenue (Millions)": 408.99,
        "Rating": 7.2
      },
      {
        "Title": "Now You See Me",
        "Genre": "Crime",
        "Revenue (Millions)": 117.7,
        "Rating": 7.3
      },
      {
        "Title": "Sherlock Holmes",
        "Genre": "Action",
        "Revenue (Millions)": 209.02,
        "Rating": 7.6
      },
      {
        "Title": "Death Proof",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.1
      },
      {
        "Title": "The Danish Girl",
        "Genre": "Other",
        "Revenue (Millions)": 12.71,
        "Rating": 7
      },
      {
        "Title": "Hercules",
        "Genre": "Action",
        "Revenue (Millions)": 72.66,
        "Rating": 6
      },
      {
        "Title": "Sucker Punch",
        "Genre": "Action",
        "Revenue (Millions)": 36.38,
        "Rating": 6.1
      },
      {
        "Title": "Keeping Up with the Joneses",
        "Genre": "Action",
        "Revenue (Millions)": 14.9,
        "Rating": 5.8
      },
      {
        "Title": "Jupiter Ascending",
        "Genre": "Action",
        "Revenue (Millions)": 47.38,
        "Rating": 5.3
      },
      {
        "Title": "Masterminds",
        "Genre": "Action",
        "Revenue (Millions)": 17.36,
        "Rating": 5.8
      },
      {
        "Title": "Iris",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "Busanhaeng",
        "Genre": "Action",
        "Revenue (Millions)": 2.13,
        "Rating": 7.5
      },
      {
        "Title": "Pitch Perfect",
        "Genre": "Comedy",
        "Revenue (Millions)": 65,
        "Rating": 7.2
      },
      {
        "Title": "Neighbors 2: Sorority Rising",
        "Genre": "Comedy",
        "Revenue (Millions)": 55.29,
        "Rating": 5.7
      },
      {
        "Title": "The Exception",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.7
      },
      {
        "Title": "Man of Steel",
        "Genre": "Action",
        "Revenue (Millions)": 291.02,
        "Rating": 7.1
      },
      {
        "Title": "The Choice",
        "Genre": "Other",
        "Revenue (Millions)": 18.71,
        "Rating": 6.6
      },
      {
        "Title": "Ice Age: Collision Course",
        "Genre": "Animation",
        "Revenue (Millions)": 64.06,
        "Rating": 5.7
      },
      {
        "Title": "The Devil Wears Prada",
        "Genre": "Comedy",
        "Revenue (Millions)": 124.73,
        "Rating": 6.8
      },
      {
        "Title": "The Infiltrator",
        "Genre": "Other",
        "Revenue (Millions)": 15.43,
        "Rating": 7.1
      },
      {
        "Title": "There Will Be Blood",
        "Genre": "Other",
        "Revenue (Millions)": 40.22,
        "Rating": 8.1
      },
      {
        "Title": "The Equalizer",
        "Genre": "Action",
        "Revenue (Millions)": 101.53,
        "Rating": 7.2
      },
      {
        "Title": "Lone Survivor",
        "Genre": "Action",
        "Revenue (Millions)": 125.07,
        "Rating": 7.5
      },
      {
        "Title": "The Cabin in the Woods",
        "Genre": "Horror",
        "Revenue (Millions)": 42.04,
        "Rating": 7
      },
      {
        "Title": "The House Bunny",
        "Genre": "Comedy",
        "Revenue (Millions)": 48.24,
        "Rating": 5.5
      },
      {
        "Title": "She's Out of My League",
        "Genre": "Comedy",
        "Revenue (Millions)": 31.58,
        "Rating": 6.4
      },
      {
        "Title": "Inherent Vice",
        "Genre": "Comedy",
        "Revenue (Millions)": 8.09,
        "Rating": 6.7
      },
      {
        "Title": "Alice Through the Looking Glass",
        "Genre": "Adventure",
        "Revenue (Millions)": 77.04,
        "Rating": 6.2
      },
      {
        "Title": "Vincent N Roxxy",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 5.5
      },
      {
        "Title": "The Fast and the Furious: Tokyo Drift",
        "Genre": "Action",
        "Revenue (Millions)": 62.49,
        "Rating": 6
      },
      {
        "Title": "How to Be Single",
        "Genre": "Comedy",
        "Revenue (Millions)": 46.81,
        "Rating": 6.1
      },
      {
        "Title": "The Blind Side",
        "Genre": "Other",
        "Revenue (Millions)": 255.95,
        "Rating": 7.7
      },
      {
        "Title": "La vie d'Adèle",
        "Genre": "Other",
        "Revenue (Millions)": 2.2,
        "Rating": 7.8
      },
      {
        "Title": "The Babadook",
        "Genre": "Other",
        "Revenue (Millions)": 0.92,
        "Rating": 6.8
      },
      {
        "Title": "The Hobbit: The Battle of the Five Armies",
        "Genre": "Adventure",
        "Revenue (Millions)": 255.11,
        "Rating": 7.4
      },
      {
        "Title": "Harry Potter and the Order of the Phoenix",
        "Genre": "Adventure",
        "Revenue (Millions)": 292,
        "Rating": 7.5
      },
      {
        "Title": "Snowpiercer",
        "Genre": "Action",
        "Revenue (Millions)": 4.56,
        "Rating": 7
      },
      {
        "Title": "The 5th Wave",
        "Genre": "Action",
        "Revenue (Millions)": 34.91,
        "Rating": 5.2
      },
      {
        "Title": "The Stakelander",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 5.3
      },
      {
        "Title": "The Visit",
        "Genre": "Comedy",
        "Revenue (Millions)": 65.07,
        "Rating": 6.2
      },
      {
        "Title": "Fast Five",
        "Genre": "Action",
        "Revenue (Millions)": 209.81,
        "Rating": 7.3
      },
      {
        "Title": "Step Up",
        "Genre": "Crime",
        "Revenue (Millions)": 65.27,
        "Rating": 6.5
      },
      {
        "Title": "Lovesong",
        "Genre": "Other",
        "Revenue (Millions)": 0.01,
        "Rating": 6.4
      },
      {
        "Title": "RocknRolla",
        "Genre": "Action",
        "Revenue (Millions)": 5.69,
        "Rating": 7.3
      },
      {
        "Title": "In Time",
        "Genre": "Action",
        "Revenue (Millions)": 37.55,
        "Rating": 6.7
      },
      {
        "Title": "The Social Network",
        "Genre": "Other",
        "Revenue (Millions)": 96.92,
        "Rating": 7.7
      },
      {
        "Title": "The Last Witch Hunter",
        "Genre": "Action",
        "Revenue (Millions)": 27.36,
        "Rating": 6
      },
      {
        "Title": "Victor Frankenstein",
        "Genre": "Other",
        "Revenue (Millions)": 5.77,
        "Rating": 6
      },
      {
        "Title": "A Street Cat Named Bob",
        "Genre": "Other",
        "Revenue (Millions)": 0.04,
        "Rating": 7.4
      },
      {
        "Title": "Green Room",
        "Genre": "Crime",
        "Revenue (Millions)": 3.22,
        "Rating": 7
      },
      {
        "Title": "Blackhat",
        "Genre": "Crime",
        "Revenue (Millions)": 7.1,
        "Rating": 5.4
      },
      {
        "Title": "Storks",
        "Genre": "Animation",
        "Revenue (Millions)": 72.66,
        "Rating": 6.9
      },
      {
        "Title": "American Sniper",
        "Genre": "Action",
        "Revenue (Millions)": 350.12,
        "Rating": 7.3
      },
      {
        "Title": "Dallas Buyers Club",
        "Genre": "Other",
        "Revenue (Millions)": 27.3,
        "Rating": 8
      },
      {
        "Title": "Lincoln",
        "Genre": "Other",
        "Revenue (Millions)": 182.2,
        "Rating": 7.4
      },
      {
        "Title": "Rush",
        "Genre": "Action",
        "Revenue (Millions)": 26.9,
        "Rating": 8.1
      },
      {
        "Title": "Before I Wake",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "Silver Linings Playbook",
        "Genre": "Comedy",
        "Revenue (Millions)": 132.09,
        "Rating": 7.8
      },
      {
        "Title": "Tracktown",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.9
      },
      {
        "Title": "The Fault in Our Stars",
        "Genre": "Other",
        "Revenue (Millions)": 124.87,
        "Rating": 7.8
      },
      {
        "Title": "Blended",
        "Genre": "Comedy",
        "Revenue (Millions)": 46.28,
        "Rating": 6.5
      },
      {
        "Title": "Fast & Furious",
        "Genre": "Action",
        "Revenue (Millions)": 155.02,
        "Rating": 6.6
      },
      {
        "Title": "Looper",
        "Genre": "Action",
        "Revenue (Millions)": 66.47,
        "Rating": 7.4
      },
      {
        "Title": "White House Down",
        "Genre": "Action",
        "Revenue (Millions)": 73.1,
        "Rating": 6.4
      },
      {
        "Title": "Pete's Dragon",
        "Genre": "Adventure",
        "Revenue (Millions)": 76.2,
        "Rating": 6.8
      },
      {
        "Title": "Spider-Man 3",
        "Genre": "Action",
        "Revenue (Millions)": 336.53,
        "Rating": 6.2
      },
      {
        "Title": "The Three Musketeers",
        "Genre": "Action",
        "Revenue (Millions)": 20.32,
        "Rating": 5.8
      },
      {
        "Title": "Stardust",
        "Genre": "Adventure",
        "Revenue (Millions)": 38.35,
        "Rating": 7.7
      },
      {
        "Title": "American Hustle",
        "Genre": "Crime",
        "Revenue (Millions)": 150.12,
        "Rating": 7.3
      },
      {
        "Title": "Jennifer's Body",
        "Genre": "Comedy",
        "Revenue (Millions)": 16.2,
        "Rating": 5.1
      },
      {
        "Title": "Midnight in Paris",
        "Genre": "Comedy",
        "Revenue (Millions)": 56.82,
        "Rating": 7.7
      },
      {
        "Title": "Lady Macbeth",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.3
      },
      {
        "Title": "Joy",
        "Genre": "Other",
        "Revenue (Millions)": 56.44,
        "Rating": 6.6
      },
      {
        "Title": "The Dressmaker",
        "Genre": "Comedy",
        "Revenue (Millions)": 2.02,
        "Rating": 7.1
      },
      {
        "Title": "Café Society",
        "Genre": "Comedy",
        "Revenue (Millions)": 11.08,
        "Rating": 6.7
      },
      {
        "Title": "Insurgent",
        "Genre": "Adventure",
        "Revenue (Millions)": 130,
        "Rating": 6.3
      },
      {
        "Title": "Seventh Son",
        "Genre": "Action",
        "Revenue (Millions)": 17.18,
        "Rating": 5.5
      },
      {
        "Title": "Demain tout commence",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 7.4
      },
      {
        "Title": "The Theory of Everything",
        "Genre": "Other",
        "Revenue (Millions)": 35.89,
        "Rating": 7.7
      },
      {
        "Title": "This Is the End",
        "Genre": "Comedy",
        "Revenue (Millions)": 101.47,
        "Rating": 6.6
      },
      {
        "Title": "About Time",
        "Genre": "Comedy",
        "Revenue (Millions)": 15.29,
        "Rating": 7.8
      },
      {
        "Title": "Step Brothers",
        "Genre": "Comedy",
        "Revenue (Millions)": 100.47,
        "Rating": 6.9
      },
      {
        "Title": "Clown",
        "Genre": "Horror",
        "Revenue (Millions)": 0.05,
        "Rating": 5.7
      },
      {
        "Title": "Star Trek Into Darkness",
        "Genre": "Action",
        "Revenue (Millions)": 228.76,
        "Rating": 7.8
      },
      {
        "Title": "Zombieland",
        "Genre": "Adventure",
        "Revenue (Millions)": 75.59,
        "Rating": 7.7
      },
      {
        "Title": "Hail, Caesar!",
        "Genre": "Comedy",
        "Revenue (Millions)": 30,
        "Rating": 6.3
      },
      {
        "Title": "Slumdog Millionaire",
        "Genre": "Other",
        "Revenue (Millions)": 141.32,
        "Rating": 8
      },
      {
        "Title": "The Twilight Saga: Breaking Dawn - Part 2",
        "Genre": "Adventure",
        "Revenue (Millions)": 292.3,
        "Rating": 5.5
      },
      {
        "Title": "American Wrestler: The Wizard",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "The Amazing Spider-Man",
        "Genre": "Action",
        "Revenue (Millions)": 262.03,
        "Rating": 7
      },
      {
        "Title": "Ben-Hur",
        "Genre": "Action",
        "Revenue (Millions)": 26.38,
        "Rating": 5.7
      },
      {
        "Title": "Sleight",
        "Genre": "Action",
        "Revenue (Millions)": 3.85,
        "Rating": 6
      },
      {
        "Title": "The Maze Runner",
        "Genre": "Action",
        "Revenue (Millions)": 102.41,
        "Rating": 6.8
      },
      {
        "Title": "Criminal",
        "Genre": "Action",
        "Revenue (Millions)": 14.27,
        "Rating": 6.3
      },
      {
        "Title": "Wanted",
        "Genre": "Action",
        "Revenue (Millions)": 134.57,
        "Rating": 6.7
      },
      {
        "Title": "Florence Foster Jenkins",
        "Genre": "Other",
        "Revenue (Millions)": 27.37,
        "Rating": 6.9
      },
      {
        "Title": "Collide",
        "Genre": "Action",
        "Revenue (Millions)": 2.2,
        "Rating": 5.7
      },
      {
        "Title": "Black Mass",
        "Genre": "Other",
        "Revenue (Millions)": 62.56,
        "Rating": 6.9
      },
      {
        "Title": "Creed",
        "Genre": "Other",
        "Revenue (Millions)": 109.71,
        "Rating": 7.6
      },
      {
        "Title": "Swiss Army Man",
        "Genre": "Adventure",
        "Revenue (Millions)": 4.21,
        "Rating": 7.1
      },
      {
        "Title": "The Expendables 3",
        "Genre": "Action",
        "Revenue (Millions)": 39.29,
        "Rating": 6.1
      },
      {
        "Title": "What We Do in the Shadows",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.33,
        "Rating": 7.6
      },
      {
        "Title": "Southpaw",
        "Genre": "Other",
        "Revenue (Millions)": 52.42,
        "Rating": 7.4
      },
      {
        "Title": "Hush",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 6.6
      },
      {
        "Title": "Bridge of Spies",
        "Genre": "Other",
        "Revenue (Millions)": 72.31,
        "Rating": 7.6
      },
      {
        "Title": "The Lego Movie",
        "Genre": "Animation",
        "Revenue (Millions)": 257.76,
        "Rating": 7.8
      },
      {
        "Title": "Everest",
        "Genre": "Action",
        "Revenue (Millions)": 43.25,
        "Rating": 7.1
      },
      {
        "Title": "Pixels",
        "Genre": "Action",
        "Revenue (Millions)": 78.75,
        "Rating": 5.6
      },
      {
        "Title": "Robin Hood",
        "Genre": "Action",
        "Revenue (Millions)": 105.22,
        "Rating": 6.7
      },
      {
        "Title": "The Wolverine",
        "Genre": "Action",
        "Revenue (Millions)": 132.55,
        "Rating": 6.7
      },
      {
        "Title": "John Carter",
        "Genre": "Action",
        "Revenue (Millions)": 73.06,
        "Rating": 6.6
      },
      {
        "Title": "Keanu",
        "Genre": "Action",
        "Revenue (Millions)": 20.57,
        "Rating": 6.3
      },
      {
        "Title": "The Gunman",
        "Genre": "Action",
        "Revenue (Millions)": 10.64,
        "Rating": 5.8
      },
      {
        "Title": "Steve Jobs",
        "Genre": "Other",
        "Revenue (Millions)": 17.75,
        "Rating": 7.2
      },
      {
        "Title": "Whisky Galore",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 5
      },
      {
        "Title": "Grown Ups 2",
        "Genre": "Comedy",
        "Revenue (Millions)": 133.67,
        "Rating": 5.4
      },
      {
        "Title": "The Age of Adaline",
        "Genre": "Other",
        "Revenue (Millions)": 42.48,
        "Rating": 7.2
      },
      {
        "Title": "The Incredible Hulk",
        "Genre": "Action",
        "Revenue (Millions)": 134.52,
        "Rating": 6.8
      },
      {
        "Title": "Couples Retreat",
        "Genre": "Comedy",
        "Revenue (Millions)": 109.18,
        "Rating": 5.5
      },
      {
        "Title": "Absolutely Anything",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6
      },
      {
        "Title": "Magic Mike",
        "Genre": "Comedy",
        "Revenue (Millions)": 113.71,
        "Rating": 6.1
      },
      {
        "Title": "Minions",
        "Genre": "Animation",
        "Revenue (Millions)": 336.03,
        "Rating": 6.4
      },
      {
        "Title": "The Black Room",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 3.9
      },
      {
        "Title": "Bronson",
        "Genre": "Action",
        "Revenue (Millions)": 0.1,
        "Rating": 7.1
      },
      {
        "Title": "Despicable Me",
        "Genre": "Animation",
        "Revenue (Millions)": 251.5,
        "Rating": 7.7
      },
      {
        "Title": "The Best of Me",
        "Genre": "Other",
        "Revenue (Millions)": 26.76,
        "Rating": 6.7
      },
      {
        "Title": "The Invitation",
        "Genre": "Other",
        "Revenue (Millions)": 0.23,
        "Rating": 6.7
      },
      {
        "Title": "Zero Dark Thirty",
        "Genre": "Other",
        "Revenue (Millions)": 95.72,
        "Rating": 7.4
      },
      {
        "Title": "Tangled",
        "Genre": "Animation",
        "Revenue (Millions)": 200.81,
        "Rating": 7.8
      },
      {
        "Title": "The Hunger Games: Mockingjay - Part 2",
        "Genre": "Action",
        "Revenue (Millions)": 281.67,
        "Rating": 6.6
      },
      {
        "Title": "Vacation",
        "Genre": "Adventure",
        "Revenue (Millions)": 58.88,
        "Rating": 6.1
      },
      {
        "Title": "Taken",
        "Genre": "Action",
        "Revenue (Millions)": 145,
        "Rating": 7.8
      },
      {
        "Title": "Pitch Perfect 2",
        "Genre": "Comedy",
        "Revenue (Millions)": 183.44,
        "Rating": 6.5
      },
      {
        "Title": "Monsters University",
        "Genre": "Animation",
        "Revenue (Millions)": 268.49,
        "Rating": 7.3
      },
      {
        "Title": "Elle",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 7.2
      },
      {
        "Title": "Mechanic: Resurrection",
        "Genre": "Action",
        "Revenue (Millions)": 21.2,
        "Rating": 5.6
      },
      {
        "Title": "Tusk",
        "Genre": "Comedy",
        "Revenue (Millions)": 1.82,
        "Rating": 5.4
      },
      {
        "Title": "The Headhunter's Calling",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "Atonement",
        "Genre": "Other",
        "Revenue (Millions)": 50.92,
        "Rating": 7.8
      },
      {
        "Title": "Harry Potter and the Deathly Hallows: Part 1",
        "Genre": "Adventure",
        "Revenue (Millions)": 294.98,
        "Rating": 7.7
      },
      {
        "Title": "Shame",
        "Genre": "Other",
        "Revenue (Millions)": 4,
        "Rating": 7.2
      },
      {
        "Title": "Hanna",
        "Genre": "Action",
        "Revenue (Millions)": 40.25,
        "Rating": 6.8
      },
      {
        "Title": "The Babysitters",
        "Genre": "Other",
        "Revenue (Millions)": 0.04,
        "Rating": 5.7
      },
      {
        "Title": "Pride and Prejudice and Zombies",
        "Genre": "Action",
        "Revenue (Millions)": 10.91,
        "Rating": 5.8
      },
      {
        "Title": "300: Rise of an Empire",
        "Genre": "Action",
        "Revenue (Millions)": 106.37,
        "Rating": 6.2
      },
      {
        "Title": "London Has Fallen",
        "Genre": "Action",
        "Revenue (Millions)": 62.4,
        "Rating": 5.9
      },
      {
        "Title": "The Curious Case of Benjamin Button",
        "Genre": "Other",
        "Revenue (Millions)": 127.49,
        "Rating": 7.8
      },
      {
        "Title": "Sin City: A Dame to Kill For",
        "Genre": "Action",
        "Revenue (Millions)": 13.75,
        "Rating": 6.5
      },
      {
        "Title": "The Bourne Ultimatum",
        "Genre": "Action",
        "Revenue (Millions)": 227.14,
        "Rating": 8.1
      },
      {
        "Title": "Srpski film",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 5.2
      },
      {
        "Title": "The Purge: Election Year",
        "Genre": "Action",
        "Revenue (Millions)": 79,
        "Rating": 6
      },
      {
        "Title": "3 Idiots",
        "Genre": "Comedy",
        "Revenue (Millions)": 6.52,
        "Rating": 8.4
      },
      {
        "Title": "Zoolander 2",
        "Genre": "Comedy",
        "Revenue (Millions)": 28.84,
        "Rating": 4.7
      },
      {
        "Title": "World War Z",
        "Genre": "Action",
        "Revenue (Millions)": 202.35,
        "Rating": 7
      },
      {
        "Title": "Mission: Impossible - Ghost Protocol",
        "Genre": "Action",
        "Revenue (Millions)": 209.36,
        "Rating": 7.4
      },
      {
        "Title": "Let Me Make You a Martyr",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 6.4
      },
      {
        "Title": "Filth",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.03,
        "Rating": 7.1
      },
      {
        "Title": "The Longest Ride",
        "Genre": "Other",
        "Revenue (Millions)": 37.43,
        "Rating": 7.1
      },
      {
        "Title": "The imposible",
        "Genre": "Other",
        "Revenue (Millions)": 19,
        "Rating": 7.6
      },
      {
        "Title": "Kick-Ass 2",
        "Genre": "Action",
        "Revenue (Millions)": 28.75,
        "Rating": 6.6
      },
      {
        "Title": "Folk Hero & Funny Guy",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 5.6
      },
      {
        "Title": "Oz the Great and Powerful",
        "Genre": "Adventure",
        "Revenue (Millions)": 234.9,
        "Rating": 6.3
      },
      {
        "Title": "Brooklyn",
        "Genre": "Other",
        "Revenue (Millions)": 38.32,
        "Rating": 7.5
      },
      {
        "Title": "Coraline",
        "Genre": "Animation",
        "Revenue (Millions)": 75.28,
        "Rating": 7.7
      },
      {
        "Title": "Blue Valentine",
        "Genre": "Other",
        "Revenue (Millions)": 9.7,
        "Rating": 7.4
      },
      {
        "Title": "The Thinning",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6
      },
      {
        "Title": "Silent Hill",
        "Genre": "Adventure",
        "Revenue (Millions)": 46.98,
        "Rating": 6.6
      },
      {
        "Title": "Dredd",
        "Genre": "Action",
        "Revenue (Millions)": 13.4,
        "Rating": 7.1
      },
      {
        "Title": "Hunt for the Wilderpeople",
        "Genre": "Adventure",
        "Revenue (Millions)": 5.2,
        "Rating": 7.9
      },
      {
        "Title": "Big Hero 6",
        "Genre": "Animation",
        "Revenue (Millions)": 222.49,
        "Rating": 7.8
      },
      {
        "Title": "Carrie",
        "Genre": "Other",
        "Revenue (Millions)": 35.27,
        "Rating": 5.9
      },
      {
        "Title": "Iron Man 2",
        "Genre": "Action",
        "Revenue (Millions)": 312.06,
        "Rating": 7
      },
      {
        "Title": "Demolition",
        "Genre": "Comedy",
        "Revenue (Millions)": 1.82,
        "Rating": 7
      },
      {
        "Title": "Pandorum",
        "Genre": "Action",
        "Revenue (Millions)": 10.33,
        "Rating": 6.8
      },
      {
        "Title": "Olympus Has Fallen",
        "Genre": "Action",
        "Revenue (Millions)": 98.9,
        "Rating": 6.5
      },
      {
        "Title": "I Am Number Four",
        "Genre": "Action",
        "Revenue (Millions)": 55.09,
        "Rating": 6.1
      },
      {
        "Title": "Jagten",
        "Genre": "Other",
        "Revenue (Millions)": 0.61,
        "Rating": 8.3
      },
      {
        "Title": "The Proposal",
        "Genre": "Comedy",
        "Revenue (Millions)": 163.95,
        "Rating": 6.7
      },
      {
        "Title": "Get Hard",
        "Genre": "Comedy",
        "Revenue (Millions)": 90.35,
        "Rating": 6
      },
      {
        "Title": "Just Go with It",
        "Genre": "Comedy",
        "Revenue (Millions)": 103.03,
        "Rating": 6.4
      },
      {
        "Title": "Revolutionary Road",
        "Genre": "Other",
        "Revenue (Millions)": 22.88,
        "Rating": 7.3
      },
      {
        "Title": "The Town",
        "Genre": "Crime",
        "Revenue (Millions)": 92.17,
        "Rating": 7.6
      },
      {
        "Title": "The Boy",
        "Genre": "Horror",
        "Revenue (Millions)": 35.79,
        "Rating": 6
      },
      {
        "Title": "Denial",
        "Genre": "Other",
        "Revenue (Millions)": 4.07,
        "Rating": 6.6
      },
      {
        "Title": "Predestination",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.5
      },
      {
        "Title": "Goosebumps",
        "Genre": "Adventure",
        "Revenue (Millions)": 80.02,
        "Rating": 6.3
      },
      {
        "Title": "Sherlock Holmes: A Game of Shadows",
        "Genre": "Action",
        "Revenue (Millions)": 186.83,
        "Rating": 7.5
      },
      {
        "Title": "Salt",
        "Genre": "Action",
        "Revenue (Millions)": 118.31,
        "Rating": 6.4
      },
      {
        "Title": "Enemy",
        "Genre": "Other",
        "Revenue (Millions)": 1.01,
        "Rating": 6.9
      },
      {
        "Title": "District 9",
        "Genre": "Action",
        "Revenue (Millions)": 115.65,
        "Rating": 8
      },
      {
        "Title": "The Other Guys",
        "Genre": "Action",
        "Revenue (Millions)": 119.22,
        "Rating": 6.7
      },
      {
        "Title": "American Gangster",
        "Genre": "Other",
        "Revenue (Millions)": 130.13,
        "Rating": 7.8
      },
      {
        "Title": "Marie Antoinette",
        "Genre": "Other",
        "Revenue (Millions)": 15.96,
        "Rating": 6.4
      },
      {
        "Title": 2012,
        "Genre": "Action",
        "Revenue (Millions)": 166.11,
        "Rating": 5.8
      },
      {
        "Title": "Harry Potter and the Half-Blood Prince",
        "Genre": "Adventure",
        "Revenue (Millions)": 301.96,
        "Rating": 7.5
      },
      {
        "Title": "Argo",
        "Genre": "Other",
        "Revenue (Millions)": 136.02,
        "Rating": 7.7
      },
      {
        "Title": "Eddie the Eagle",
        "Genre": "Other",
        "Revenue (Millions)": 15.79,
        "Rating": 7.4
      },
      {
        "Title": "The Lives of Others",
        "Genre": "Other",
        "Revenue (Millions)": 11.28,
        "Rating": 8.5
      },
      {
        "Title": "Pet",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 5.7
      },
      {
        "Title": "Paint It Black",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 8.3
      },
      {
        "Title": "Macbeth",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.7
      },
      {
        "Title": "Forgetting Sarah Marshall",
        "Genre": "Comedy",
        "Revenue (Millions)": 62.88,
        "Rating": 7.2
      },
      {
        "Title": "The Giver",
        "Genre": "Other",
        "Revenue (Millions)": 45.09,
        "Rating": 6.5
      },
      {
        "Title": "Triple 9",
        "Genre": "Action",
        "Revenue (Millions)": 12.63,
        "Rating": 6.3
      },
      {
        "Title": "Perfetti sconosciuti",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 7.7
      },
      {
        "Title": "Angry Birds",
        "Genre": "Animation",
        "Revenue (Millions)": 107.51,
        "Rating": 6.3
      },
      {
        "Title": "Moonrise Kingdom",
        "Genre": "Adventure",
        "Revenue (Millions)": 45.51,
        "Rating": 7.8
      },
      {
        "Title": "Hairspray",
        "Genre": "Comedy",
        "Revenue (Millions)": 118.82,
        "Rating": 6.7
      },
      {
        "Title": "Safe Haven",
        "Genre": "Other",
        "Revenue (Millions)": 71.35,
        "Rating": 6.7
      },
      {
        "Title": "Focus",
        "Genre": "Comedy",
        "Revenue (Millions)": 53.85,
        "Rating": 6.6
      },
      {
        "Title": "Ratatouille",
        "Genre": "Animation",
        "Revenue (Millions)": 206.44,
        "Rating": 8
      },
      {
        "Title": "Stake Land",
        "Genre": "Other",
        "Revenue (Millions)": 0.02,
        "Rating": 6.5
      },
      {
        "Title": "The Book of Eli",
        "Genre": "Action",
        "Revenue (Millions)": 94.82,
        "Rating": 6.9
      },
      {
        "Title": "Cloverfield",
        "Genre": "Action",
        "Revenue (Millions)": 80.03,
        "Rating": 7
      },
      {
        "Title": "Point Break",
        "Genre": "Action",
        "Revenue (Millions)": 28.77,
        "Rating": 5.3
      },
      {
        "Title": "Under the Skin",
        "Genre": "Other",
        "Revenue (Millions)": 2.61,
        "Rating": 6.3
      },
      {
        "Title": "I Am Legend",
        "Genre": "Other",
        "Revenue (Millions)": 256.39,
        "Rating": 7.2
      },
      {
        "Title": "Men in Black 3",
        "Genre": "Action",
        "Revenue (Millions)": 179.02,
        "Rating": 6.8
      },
      {
        "Title": "Super 8",
        "Genre": "Other",
        "Revenue (Millions)": 126.98,
        "Rating": 7.1
      },
      {
        "Title": "Law Abiding Citizen",
        "Genre": "Crime",
        "Revenue (Millions)": 73.34,
        "Rating": 7.4
      },
      {
        "Title": "Up",
        "Genre": "Animation",
        "Revenue (Millions)": 292.98,
        "Rating": 8.3
      },
      {
        "Title": "Maze Runner: The Scorch Trials",
        "Genre": "Action",
        "Revenue (Millions)": 81.69,
        "Rating": 6.3
      },
      {
        "Title": "Carol",
        "Genre": "Other",
        "Revenue (Millions)": 0.25,
        "Rating": 7.2
      },
      {
        "Title": "Imperium",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.5
      },
      {
        "Title": "Youth",
        "Genre": "Comedy",
        "Revenue (Millions)": 2.7,
        "Rating": 7.3
      },
      {
        "Title": "Mr. Nobody",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.9
      },
      {
        "Title": "City of Tiny Lights",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 5.7
      },
      {
        "Title": "Savages",
        "Genre": "Crime",
        "Revenue (Millions)": 47.31,
        "Rating": 6.5
      },
      {
        "Title": "(500) Days of Summer",
        "Genre": "Comedy",
        "Revenue (Millions)": 32.39,
        "Rating": 7.7
      },
      {
        "Title": "Movie 43",
        "Genre": "Comedy",
        "Revenue (Millions)": 8.83,
        "Rating": 4.3
      },
      {
        "Title": "Gravity",
        "Genre": "Other",
        "Revenue (Millions)": 274.08,
        "Rating": 7.8
      },
      {
        "Title": "The Boy in the Striped Pyjamas",
        "Genre": "Other",
        "Revenue (Millions)": 9.03,
        "Rating": 7.8
      },
      {
        "Title": "Shooter",
        "Genre": "Action",
        "Revenue (Millions)": 46.98,
        "Rating": 7.2
      },
      {
        "Title": "The Happening",
        "Genre": "Sci-Fi",
        "Revenue (Millions)": 64.51,
        "Rating": 5
      },
      {
        "Title": "Bone Tomahawk",
        "Genre": "Adventure",
        "Revenue (Millions)": 66.01,
        "Rating": 7.1
      },
      {
        "Title": "Magic Mike XXL",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 5.7
      },
      {
        "Title": "Easy A",
        "Genre": "Comedy",
        "Revenue (Millions)": 58.4,
        "Rating": 7.1
      },
      {
        "Title": "Exodus: Gods and Kings",
        "Genre": "Action",
        "Revenue (Millions)": 65.01,
        "Rating": 6
      },
      {
        "Title": "Chappie",
        "Genre": "Action",
        "Revenue (Millions)": 31.57,
        "Rating": 6.9
      },
      {
        "Title": "The Hobbit: The Desolation of Smaug",
        "Genre": "Adventure",
        "Revenue (Millions)": 258.36,
        "Rating": 7.9
      },
      {
        "Title": "Half of a Yellow Sun",
        "Genre": "Other",
        "Revenue (Millions)": 0.05,
        "Rating": 6.2
      },
      {
        "Title": "Anthropoid",
        "Genre": "Other",
        "Revenue (Millions)": 2.96,
        "Rating": 7.2
      },
      {
        "Title": "The Counselor",
        "Genre": "Crime",
        "Revenue (Millions)": 16.97,
        "Rating": 5.3
      },
      {
        "Title": "Viking",
        "Genre": "Action",
        "Revenue (Millions)": 23.05,
        "Rating": 4.7
      },
      {
        "Title": "Whiskey Tango Foxtrot",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.6
      },
      {
        "Title": "Trust",
        "Genre": "Crime",
        "Revenue (Millions)": 0.06,
        "Rating": 7
      },
      {
        "Title": "Birth of the Dragon",
        "Genre": "Action",
        "Revenue (Millions)": 93.05,
        "Rating": 3.9
      },
      {
        "Title": "Elysium",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 6.6
      },
      {
        "Title": "The Green Inferno",
        "Genre": "Adventure",
        "Revenue (Millions)": 7.19,
        "Rating": 5.4
      },
      {
        "Title": "Godzilla",
        "Genre": "Action",
        "Revenue (Millions)": 200.66,
        "Rating": 6.4
      },
      {
        "Title": "The Bourne Legacy",
        "Genre": "Action",
        "Revenue (Millions)": 113.17,
        "Rating": 6.7
      },
      {
        "Title": "A Good Year",
        "Genre": "Comedy",
        "Revenue (Millions)": 7.46,
        "Rating": 6.9
      },
      {
        "Title": "Friend Request",
        "Genre": "Horror",
        "Revenue (Millions)": 64.03,
        "Rating": 5.4
      },
      {
        "Title": "Deja Vu",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 7
      },
      {
        "Title": "Lucy",
        "Genre": "Action",
        "Revenue (Millions)": 126.55,
        "Rating": 6.4
      },
      {
        "Title": "A Quiet Passion",
        "Genre": "Other",
        "Revenue (Millions)": 1.08,
        "Rating": 7.2
      },
      {
        "Title": "Need for Speed",
        "Genre": "Action",
        "Revenue (Millions)": 43.57,
        "Rating": 6.5
      },
      {
        "Title": "Jack Reacher",
        "Genre": "Action",
        "Revenue (Millions)": 58.68,
        "Rating": 7
      },
      {
        "Title": "The Do-Over",
        "Genre": "Action",
        "Revenue (Millions)": 0.54,
        "Rating": 5.7
      },
      {
        "Title": "True Crimes",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 7.3
      },
      {
        "Title": "American Pastoral",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "The Ghost Writer",
        "Genre": "Other",
        "Revenue (Millions)": 15.52,
        "Rating": 7.2
      },
      {
        "Title": "Limitless",
        "Genre": "Other",
        "Revenue (Millions)": 79.24,
        "Rating": 7.4
      },
      {
        "Title": "Spectral",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 6.3
      },
      {
        "Title": "P.S. I Love You",
        "Genre": "Other",
        "Revenue (Millions)": 53.68,
        "Rating": 7.1
      },
      {
        "Title": "Zipper",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.7
      },
      {
        "Title": "Midnight Special",
        "Genre": "Other",
        "Revenue (Millions)": 3.71,
        "Rating": 6.7
      },
      {
        "Title": "Don't Think Twice",
        "Genre": "Comedy",
        "Revenue (Millions)": 4.42,
        "Rating": 6.8
      },
      {
        "Title": "Alice in Wonderland",
        "Genre": "Adventure",
        "Revenue (Millions)": 334.19,
        "Rating": 6.5
      },
      {
        "Title": "Chuck",
        "Genre": "Other",
        "Revenue (Millions)": 0.11,
        "Rating": 6.8
      },
      {
        "Title": "I, Daniel Blake",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.9
      },
      {
        "Title": "The Break-Up",
        "Genre": "Comedy",
        "Revenue (Millions)": 118.68,
        "Rating": 5.8
      },
      {
        "Title": "Loving",
        "Genre": "Other",
        "Revenue (Millions)": 7.7,
        "Rating": 7.1
      },
      {
        "Title": "Fantastic Four",
        "Genre": "Action",
        "Revenue (Millions)": 56.11,
        "Rating": 4.3
      },
      {
        "Title": "The Survivalist",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.3
      },
      {
        "Title": "Colonia",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.1
      },
      {
        "Title": "The Boy Next Door",
        "Genre": "Other",
        "Revenue (Millions)": 35.39,
        "Rating": 4.6
      },
      {
        "Title": "The Gift",
        "Genre": "Other",
        "Revenue (Millions)": 43.77,
        "Rating": 7.1
      },
      {
        "Title": "Dracula Untold",
        "Genre": "Action",
        "Revenue (Millions)": 55.94,
        "Rating": 6.3
      },
      {
        "Title": "In the Heart of the Sea",
        "Genre": "Action",
        "Revenue (Millions)": 24.99,
        "Rating": 6.9
      },
      {
        "Title": "Idiocracy",
        "Genre": "Adventure",
        "Revenue (Millions)": 0.44,
        "Rating": 6.6
      },
      {
        "Title": "The Expendables",
        "Genre": "Action",
        "Revenue (Millions)": 102.98,
        "Rating": 6.5
      },
      {
        "Title": "Evil Dead",
        "Genre": "Fantasy",
        "Revenue (Millions)": 54.24,
        "Rating": 6.5
      },
      {
        "Title": "Sinister",
        "Genre": "Horror",
        "Revenue (Millions)": 48.06,
        "Rating": 6.8
      },
      {
        "Title": "Wreck-It Ralph",
        "Genre": "Animation",
        "Revenue (Millions)": 189.41,
        "Rating": 7.8
      },
      {
        "Title": "Snow White and the Huntsman",
        "Genre": "Action",
        "Revenue (Millions)": 155.11,
        "Rating": 6.1
      },
      {
        "Title": "Pan",
        "Genre": "Adventure",
        "Revenue (Millions)": 34.96,
        "Rating": 5.8
      },
      {
        "Title": "Transformers: Dark of the Moon",
        "Genre": "Action",
        "Revenue (Millions)": 352.36,
        "Rating": 6.3
      },
      {
        "Title": "Juno",
        "Genre": "Comedy",
        "Revenue (Millions)": 143.49,
        "Rating": 7.5
      },
      {
        "Title": "A Hologram for the King",
        "Genre": "Comedy",
        "Revenue (Millions)": 4.2,
        "Rating": 6.1
      },
      {
        "Title": "Money Monster",
        "Genre": "Crime",
        "Revenue (Millions)": 41.01,
        "Rating": 6.5
      },
      {
        "Title": "The Other Woman",
        "Genre": "Comedy",
        "Revenue (Millions)": 83.91,
        "Rating": 6
      },
      {
        "Title": "Enchanted",
        "Genre": "Animation",
        "Revenue (Millions)": 127.71,
        "Rating": 7.1
      },
      {
        "Title": "The Intern",
        "Genre": "Comedy",
        "Revenue (Millions)": 75.27,
        "Rating": 7.1
      },
      {
        "Title": "Little Miss Sunshine",
        "Genre": "Comedy",
        "Revenue (Millions)": 59.89,
        "Rating": 7.8
      },
      {
        "Title": "Bleed for This",
        "Genre": "Other",
        "Revenue (Millions)": 4.85,
        "Rating": 6.8
      },
      {
        "Title": "Clash of the Titans",
        "Genre": "Action",
        "Revenue (Millions)": 163.19,
        "Rating": 5.8
      },
      {
        "Title": "The Finest Hours",
        "Genre": "Action",
        "Revenue (Millions)": 27.55,
        "Rating": 6.8
      },
      {
        "Title": "Tron",
        "Genre": "Action",
        "Revenue (Millions)": 172.05,
        "Rating": 6.8
      },
      {
        "Title": "The Hunger Games: Catching Fire",
        "Genre": "Action",
        "Revenue (Millions)": 424.65,
        "Rating": 7.6
      },
      {
        "Title": "All Good Things",
        "Genre": "Crime",
        "Revenue (Millions)": 0.58,
        "Rating": 6.3
      },
      {
        "Title": "Kickboxer: Vengeance",
        "Genre": "Action",
        "Revenue (Millions)": 131.56,
        "Rating": 4.9
      },
      {
        "Title": "The Last Airbender",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 4.2
      },
      {
        "Title": "Sex Tape",
        "Genre": "Comedy",
        "Revenue (Millions)": 38.54,
        "Rating": 5.1
      },
      {
        "Title": "What to Expect When You're Expecting",
        "Genre": "Comedy",
        "Revenue (Millions)": 41.1,
        "Rating": 5.7
      },
      {
        "Title": "Moneyball",
        "Genre": "Other",
        "Revenue (Millions)": 75.61,
        "Rating": 7.6
      },
      {
        "Title": "Ghost Rider",
        "Genre": "Action",
        "Revenue (Millions)": 115.8,
        "Rating": 5.2
      },
      {
        "Title": "Unbroken",
        "Genre": "Other",
        "Revenue (Millions)": 115.6,
        "Rating": 7.2
      },
      {
        "Title": "Immortals",
        "Genre": "Action",
        "Revenue (Millions)": 83.5,
        "Rating": 6
      },
      {
        "Title": "Sunshine",
        "Genre": "Adventure",
        "Revenue (Millions)": 3.68,
        "Rating": 7.3
      },
      {
        "Title": "Brave",
        "Genre": "Animation",
        "Revenue (Millions)": 237.28,
        "Rating": 7.2
      },
      {
        "Title": "Män som hatar kvinnor",
        "Genre": "Other",
        "Revenue (Millions)": 10.1,
        "Rating": 7.8
      },
      {
        "Title": "Adoration",
        "Genre": "Other",
        "Revenue (Millions)": 0.32,
        "Rating": 6.2
      },
      {
        "Title": "The Drop",
        "Genre": "Crime",
        "Revenue (Millions)": 10.72,
        "Rating": 7.1
      },
      {
        "Title": "She's the Man",
        "Genre": "Comedy",
        "Revenue (Millions)": 2.34,
        "Rating": 6.4
      },
      {
        "Title": "Daddy's Home",
        "Genre": "Comedy",
        "Revenue (Millions)": 150.32,
        "Rating": 6.1
      },
      {
        "Title": "Let Me In",
        "Genre": "Other",
        "Revenue (Millions)": 12.13,
        "Rating": 7.2
      },
      {
        "Title": "Never Back Down",
        "Genre": "Action",
        "Revenue (Millions)": 24.85,
        "Rating": 6.6
      },
      {
        "Title": "Grimsby",
        "Genre": "Action",
        "Revenue (Millions)": 6.86,
        "Rating": 6.2
      },
      {
        "Title": "Moon",
        "Genre": "Other",
        "Revenue (Millions)": 5.01,
        "Rating": 7.9
      },
      {
        "Title": "Megamind",
        "Genre": "Animation",
        "Revenue (Millions)": 148.34,
        "Rating": 7.3
      },
      {
        "Title": "Gangster Squad",
        "Genre": "Action",
        "Revenue (Millions)": 46,
        "Rating": 6.7
      },
      {
        "Title": "Blood Father",
        "Genre": "Action",
        "Revenue (Millions)": 93.95,
        "Rating": 6.4
      },
      {
        "Title": "He's Just Not That Into You",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6.4
      },
      {
        "Title": "Kung Fu Panda 3",
        "Genre": "Animation",
        "Revenue (Millions)": 143.52,
        "Rating": 7.2
      },
      {
        "Title": "The Rise of the Krays",
        "Genre": "Crime",
        "Revenue (Millions)": 6.53,
        "Rating": 5.1
      },
      {
        "Title": "Handsome Devil",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.4
      },
      {
        "Title": "Winter's Bone",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.2
      },
      {
        "Title": "Horrible Bosses",
        "Genre": "Comedy",
        "Revenue (Millions)": 117.53,
        "Rating": 6.9
      },
      {
        "Title": "Mommy",
        "Genre": "Other",
        "Revenue (Millions)": 3.49,
        "Rating": 8.1
      },
      {
        "Title": "Hellboy II: The Golden Army",
        "Genre": "Action",
        "Revenue (Millions)": 75.75,
        "Rating": 7
      },
      {
        "Title": "Beautiful Creatures",
        "Genre": "Other",
        "Revenue (Millions)": 19.45,
        "Rating": 6.2
      },
      {
        "Title": "Toni Erdmann",
        "Genre": "Comedy",
        "Revenue (Millions)": 1.48,
        "Rating": 7.6
      },
      {
        "Title": "The Lovely Bones",
        "Genre": "Other",
        "Revenue (Millions)": 43.98,
        "Rating": 6.7
      },
      {
        "Title": "The Assassination of Jesse James by the Coward Robert Ford",
        "Genre": "Other",
        "Revenue (Millions)": 3.9,
        "Rating": 7.5
      },
      {
        "Title": "Don Jon",
        "Genre": "Comedy",
        "Revenue (Millions)": 24.48,
        "Rating": 6.6
      },
      {
        "Title": "Bastille Day",
        "Genre": "Action",
        "Revenue (Millions)": 0.04,
        "Rating": 6.3
      },
      {
        "Title": "2307: Winter's Dream",
        "Genre": "Sci-Fi",
        "Revenue (Millions)": 20.76,
        "Rating": 4
      },
      {
        "Title": "Free State of Jones",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "Mr. Right",
        "Genre": "Action",
        "Revenue (Millions)": 0.03,
        "Rating": 6.3
      },
      {
        "Title": "The Secret Life of Walter Mitty",
        "Genre": "Adventure",
        "Revenue (Millions)": 58.23,
        "Rating": 7.3
      },
      {
        "Title": "Dope",
        "Genre": "Comedy",
        "Revenue (Millions)": 17.47,
        "Rating": 7.3
      },
      {
        "Title": "Underworld Awakening",
        "Genre": "Action",
        "Revenue (Millions)": 62.32,
        "Rating": 6.4
      },
      {
        "Title": "Antichrist",
        "Genre": "Other",
        "Revenue (Millions)": 0.4,
        "Rating": 6.6
      },
      {
        "Title": "Friday the 13th",
        "Genre": "Horror",
        "Revenue (Millions)": 65,
        "Rating": 5.6
      },
      {
        "Title": "Taken 3",
        "Genre": "Action",
        "Revenue (Millions)": 89.25,
        "Rating": 6
      },
      {
        "Title": "Total Recall",
        "Genre": "Action",
        "Revenue (Millions)": 58.88,
        "Rating": 6.3
      },
      {
        "Title": "X-Men: The Last Stand",
        "Genre": "Action",
        "Revenue (Millions)": 234.36,
        "Rating": 6.7
      },
      {
        "Title": "The Escort",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6
      },
      {
        "Title": "The Whole Truth",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "Night at the Museum: Secret of the Tomb",
        "Genre": "Adventure",
        "Revenue (Millions)": 113.73,
        "Rating": 6.2
      },
      {
        "Title": "Love & Other Drugs",
        "Genre": "Comedy",
        "Revenue (Millions)": 32.36,
        "Rating": 6.7
      },
      {
        "Title": "The Interview",
        "Genre": "Comedy",
        "Revenue (Millions)": 6.11,
        "Rating": 6.6
      },
      {
        "Title": "The Host",
        "Genre": "Comedy",
        "Revenue (Millions)": 2.2,
        "Rating": 7
      },
      {
        "Title": "Megan Is Missing",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 4.9
      },
      {
        "Title": "WALL·E",
        "Genre": "Animation",
        "Revenue (Millions)": 223.81,
        "Rating": 8.4
      },
      {
        "Title": "Knocked Up",
        "Genre": "Comedy",
        "Revenue (Millions)": 148.73,
        "Rating": 7
      },
      {
        "Title": "Source Code",
        "Genre": "Other",
        "Revenue (Millions)": 54.7,
        "Rating": 7.5
      },
      {
        "Title": "Lawless",
        "Genre": "Crime",
        "Revenue (Millions)": 37.4,
        "Rating": 7.3
      },
      {
        "Title": "Unfriended",
        "Genre": "Other",
        "Revenue (Millions)": 31.54,
        "Rating": 5.6
      },
      {
        "Title": "American Reunion",
        "Genre": "Comedy",
        "Revenue (Millions)": 56.72,
        "Rating": 6.7
      },
      {
        "Title": "The Pursuit of Happyness",
        "Genre": "Other",
        "Revenue (Millions)": 162.59,
        "Rating": 8
      },
      {
        "Title": "Relatos salvajes",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.08,
        "Rating": 8.1
      },
      {
        "Title": "The Ridiculous 6",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 4.8
      },
      {
        "Title": "Frantz",
        "Genre": "Other",
        "Revenue (Millions)": 0.86,
        "Rating": 7.5
      },
      {
        "Title": "Viral",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.5
      },
      {
        "Title": "Gran Torino",
        "Genre": "Other",
        "Revenue (Millions)": 148.09,
        "Rating": 8.2
      },
      {
        "Title": "Burnt",
        "Genre": "Comedy",
        "Revenue (Millions)": 13.65,
        "Rating": 6.6
      },
      {
        "Title": "Tall Men",
        "Genre": "Fantasy",
        "Revenue (Millions)": null,
        "Rating": 3.2
      },
      {
        "Title": "Sleeping Beauty",
        "Genre": "Other",
        "Revenue (Millions)": 0.03,
        "Rating": 5.3
      },
      {
        "Title": "Vampire Academy",
        "Genre": "Action",
        "Revenue (Millions)": 7.79,
        "Rating": 5.6
      },
      {
        "Title": "Sweeney Todd: The Demon Barber of Fleet Street",
        "Genre": "Other",
        "Revenue (Millions)": 52.88,
        "Rating": 7.4
      },
      {
        "Title": "Solace",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.4
      },
      {
        "Title": "Insidious",
        "Genre": "Horror",
        "Revenue (Millions)": 53.99,
        "Rating": 6.8
      },
      {
        "Title": "Popstar: Never Stop Never Stopping",
        "Genre": "Comedy",
        "Revenue (Millions)": 9.39,
        "Rating": 6.7
      },
      {
        "Title": "The Levelling",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.4
      },
      {
        "Title": "Public Enemies",
        "Genre": "Other",
        "Revenue (Millions)": 97.03,
        "Rating": 7
      },
      {
        "Title": "Boyhood",
        "Genre": "Other",
        "Revenue (Millions)": 25.36,
        "Rating": 7.9
      },
      {
        "Title": "Teenage Mutant Ninja Turtles",
        "Genre": "Action",
        "Revenue (Millions)": 190.87,
        "Rating": 5.9
      },
      {
        "Title": "Eastern Promises",
        "Genre": "Crime",
        "Revenue (Millions)": 17.11,
        "Rating": 7.7
      },
      {
        "Title": "The Daughter",
        "Genre": "Other",
        "Revenue (Millions)": 0.03,
        "Rating": 6.7
      },
      {
        "Title": "Pineapple Express",
        "Genre": "Action",
        "Revenue (Millions)": 87.34,
        "Rating": 7
      },
      {
        "Title": "The First Time",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.02,
        "Rating": 6.9
      },
      {
        "Title": "Gone Baby Gone",
        "Genre": "Crime",
        "Revenue (Millions)": 20.3,
        "Rating": 7.7
      },
      {
        "Title": "The Heat",
        "Genre": "Action",
        "Revenue (Millions)": 159.58,
        "Rating": 6.6
      },
      {
        "Title": "L'avenir",
        "Genre": "Other",
        "Revenue (Millions)": 0.28,
        "Rating": 7.1
      },
      {
        "Title": "Anna Karenina",
        "Genre": "Other",
        "Revenue (Millions)": 12.8,
        "Rating": 6.6
      },
      {
        "Title": "Regression",
        "Genre": "Crime",
        "Revenue (Millions)": 0.05,
        "Rating": 5.7
      },
      {
        "Title": "Ted 2",
        "Genre": "Adventure",
        "Revenue (Millions)": 81.26,
        "Rating": 6.3
      },
      {
        "Title": "Pain & Gain",
        "Genre": "Comedy",
        "Revenue (Millions)": 49.87,
        "Rating": 6.5
      },
      {
        "Title": "Blood Diamond",
        "Genre": "Adventure",
        "Revenue (Millions)": 57.37,
        "Rating": 8
      },
      {
        "Title": "Devil's Knot",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "Child 44",
        "Genre": "Crime",
        "Revenue (Millions)": 1.21,
        "Rating": 6.5
      },
      {
        "Title": "The Hurt Locker",
        "Genre": "Other",
        "Revenue (Millions)": 15.7,
        "Rating": 7.6
      },
      {
        "Title": "Green Lantern",
        "Genre": "Action",
        "Revenue (Millions)": 116.59,
        "Rating": 5.6
      },
      {
        "Title": "War on Everyone",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 5.9
      },
      {
        "Title": "The Mist",
        "Genre": "Horror",
        "Revenue (Millions)": 25.59,
        "Rating": 7.2
      },
      {
        "Title": "Escape Plan",
        "Genre": "Action",
        "Revenue (Millions)": 25.12,
        "Rating": 6.7
      },
      {
        "Title": "Love, Rosie",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.01,
        "Rating": 7.2
      },
      {
        "Title": "The DUFF",
        "Genre": "Comedy",
        "Revenue (Millions)": 34.02,
        "Rating": 6.5
      },
      {
        "Title": "The Age of Shadows",
        "Genre": "Action",
        "Revenue (Millions)": 0.54,
        "Rating": 7.2
      },
      {
        "Title": "The Hunger Games: Mockingjay - Part 1",
        "Genre": "Action",
        "Revenue (Millions)": 337.1,
        "Rating": 6.7
      },
      {
        "Title": "We Need to Talk About Kevin",
        "Genre": "Other",
        "Revenue (Millions)": 1.74,
        "Rating": 7.5
      },
      {
        "Title": "Love & Friendship",
        "Genre": "Comedy",
        "Revenue (Millions)": 14.01,
        "Rating": 6.5
      },
      {
        "Title": "The Mortal Instruments: City of Bones",
        "Genre": "Action",
        "Revenue (Millions)": 31.17,
        "Rating": 5.9
      },
      {
        "Title": "Seven Pounds",
        "Genre": "Other",
        "Revenue (Millions)": 69.95,
        "Rating": 7.7
      },
      {
        "Title": "The King's Speech",
        "Genre": "Other",
        "Revenue (Millions)": 138.8,
        "Rating": 8
      },
      {
        "Title": "Hunger",
        "Genre": "Other",
        "Revenue (Millions)": 0.15,
        "Rating": 7.6
      },
      {
        "Title": "Jumper",
        "Genre": "Action",
        "Revenue (Millions)": 80.17,
        "Rating": 6.1
      },
      {
        "Title": "Toy Story 3",
        "Genre": "Animation",
        "Revenue (Millions)": 414.98,
        "Rating": 8.3
      },
      {
        "Title": "Tinker Tailor Soldier Spy",
        "Genre": "Other",
        "Revenue (Millions)": 24.1,
        "Rating": 7.1
      },
      {
        "Title": "Resident Evil: Retribution",
        "Genre": "Action",
        "Revenue (Millions)": 42.35,
        "Rating": 5.4
      },
      {
        "Title": "Dear Zindagi",
        "Genre": "Other",
        "Revenue (Millions)": 1.4,
        "Rating": 7.8
      },
      {
        "Title": "Genius",
        "Genre": "Other",
        "Revenue (Millions)": 1.36,
        "Rating": 6.5
      },
      {
        "Title": "Pompeii",
        "Genre": "Action",
        "Revenue (Millions)": 23.22,
        "Rating": 5.5
      },
      {
        "Title": "Life of Pi",
        "Genre": "Adventure",
        "Revenue (Millions)": 124.98,
        "Rating": 7.9
      },
      {
        "Title": "Hachi: A Dog's Tale",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 8.1
      },
      {
        "Title": "10 Years",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.2,
        "Rating": 6.1
      },
      {
        "Title": "I Origins",
        "Genre": "Other",
        "Revenue (Millions)": 0.33,
        "Rating": 7.3
      },
      {
        "Title": "Live Free or Die Hard",
        "Genre": "Action",
        "Revenue (Millions)": 134.52,
        "Rating": 7.2
      },
      {
        "Title": "The Matchbreaker",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 5.5
      },
      {
        "Title": "Funny Games",
        "Genre": "Crime",
        "Revenue (Millions)": 1.29,
        "Rating": 6.5
      },
      {
        "Title": "Ted",
        "Genre": "Comedy",
        "Revenue (Millions)": 218.63,
        "Rating": 7
      },
      {
        "Title": "RED",
        "Genre": "Action",
        "Revenue (Millions)": 90.36,
        "Rating": 7.1
      },
      {
        "Title": "Australia",
        "Genre": "Adventure",
        "Revenue (Millions)": 49.55,
        "Rating": 6.6
      },
      {
        "Title": "Faster",
        "Genre": "Action",
        "Revenue (Millions)": 23.23,
        "Rating": 6.5
      },
      {
        "Title": "The Neighbor",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 5.8
      },
      {
        "Title": "The Adjustment Bureau",
        "Genre": "Other",
        "Revenue (Millions)": 62.45,
        "Rating": 7.1
      },
      {
        "Title": "The Hollars",
        "Genre": "Comedy",
        "Revenue (Millions)": 1.02,
        "Rating": 6.5
      },
      {
        "Title": "The Judge",
        "Genre": "Crime",
        "Revenue (Millions)": 47.11,
        "Rating": 7.4
      },
      {
        "Title": "Closed Circuit",
        "Genre": "Crime",
        "Revenue (Millions)": 5.73,
        "Rating": 6.2
      },
      {
        "Title": "Transformers: Revenge of the Fallen",
        "Genre": "Action",
        "Revenue (Millions)": 402.08,
        "Rating": 6
      },
      {
        "Title": "La tortue rouge",
        "Genre": "Animation",
        "Revenue (Millions)": 0.92,
        "Rating": 7.6
      },
      {
        "Title": "The Book of Life",
        "Genre": "Animation",
        "Revenue (Millions)": 50.15,
        "Rating": 7.3
      },
      {
        "Title": "Incendies",
        "Genre": "Other",
        "Revenue (Millions)": 6.86,
        "Rating": 8.2
      },
      {
        "Title": "The Heartbreak Kid",
        "Genre": "Comedy",
        "Revenue (Millions)": 36.77,
        "Rating": 5.8
      },
      {
        "Title": "Happy Feet",
        "Genre": "Animation",
        "Revenue (Millions)": 197.99,
        "Rating": 6.5
      },
      {
        "Title": "Entourage",
        "Genre": "Comedy",
        "Revenue (Millions)": 32.36,
        "Rating": 6.6
      },
      {
        "Title": "The Strangers",
        "Genre": "Horror",
        "Revenue (Millions)": 52.53,
        "Rating": 6.2
      },
      {
        "Title": "Noah",
        "Genre": "Action",
        "Revenue (Millions)": 101.16,
        "Rating": 5.8
      },
      {
        "Title": "Neighbors",
        "Genre": "Comedy",
        "Revenue (Millions)": 150.06,
        "Rating": 6.4
      },
      {
        "Title": "Nymphomaniac: Vol. II",
        "Genre": "Other",
        "Revenue (Millions)": 0.33,
        "Rating": 6.7
      },
      {
        "Title": "Wild",
        "Genre": "Adventure",
        "Revenue (Millions)": 37.88,
        "Rating": 7.1
      },
      {
        "Title": "Grown Ups",
        "Genre": "Comedy",
        "Revenue (Millions)": 162,
        "Rating": 6
      },
      {
        "Title": "Blair Witch",
        "Genre": "Horror",
        "Revenue (Millions)": 20.75,
        "Rating": 5.1
      },
      {
        "Title": "The Karate Kid",
        "Genre": "Action",
        "Revenue (Millions)": 176.59,
        "Rating": 6.2
      },
      {
        "Title": "Dark Shadows",
        "Genre": "Comedy",
        "Revenue (Millions)": 79.71,
        "Rating": 6.2
      },
      {
        "Title": "Friends with Benefits",
        "Genre": "Comedy",
        "Revenue (Millions)": 55.8,
        "Rating": 6.6
      },
      {
        "Title": "The Illusionist",
        "Genre": "Other",
        "Revenue (Millions)": 39.83,
        "Rating": 7.6
      },
      {
        "Title": "The A-Team",
        "Genre": "Action",
        "Revenue (Millions)": 77.21,
        "Rating": 6.8
      },
      {
        "Title": "The Guest",
        "Genre": "Other",
        "Revenue (Millions)": 0.32,
        "Rating": 6.7
      },
      {
        "Title": "The Internship",
        "Genre": "Comedy",
        "Revenue (Millions)": 44.67,
        "Rating": 6.3
      },
      {
        "Title": "Paul",
        "Genre": "Adventure",
        "Revenue (Millions)": 37.37,
        "Rating": 7
      },
      {
        "Title": "This Beautiful Fantastic",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "The Da Vinci Code",
        "Genre": "Other",
        "Revenue (Millions)": 217.54,
        "Rating": 6.6
      },
      {
        "Title": "Mr. Church",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.69,
        "Rating": 7.7
      },
      {
        "Title": "Hugo",
        "Genre": "Adventure",
        "Revenue (Millions)": 73.82,
        "Rating": 7.5
      },
      {
        "Title": "The Blackcoat's Daughter",
        "Genre": "Horror",
        "Revenue (Millions)": 0.02,
        "Rating": 5.6
      },
      {
        "Title": "Body of Lies",
        "Genre": "Action",
        "Revenue (Millions)": 39.38,
        "Rating": 7.1
      },
      {
        "Title": "Knight of Cups",
        "Genre": "Other",
        "Revenue (Millions)": 0.56,
        "Rating": 5.7
      },
      {
        "Title": "The Mummy: Tomb of the Dragon Emperor",
        "Genre": "Action",
        "Revenue (Millions)": 102.18,
        "Rating": 5.2
      },
      {
        "Title": "The Boss",
        "Genre": "Comedy",
        "Revenue (Millions)": 63.03,
        "Rating": 5.4
      },
      {
        "Title": "Hands of Stone",
        "Genre": "Action",
        "Revenue (Millions)": 4.71,
        "Rating": 6.6
      },
      {
        "Title": "El secreto de sus ojos",
        "Genre": "Other",
        "Revenue (Millions)": 20.17,
        "Rating": 8.2
      },
      {
        "Title": "True Grit",
        "Genre": "Adventure",
        "Revenue (Millions)": 171.03,
        "Rating": 7.6
      },
      {
        "Title": "We Are Your Friends",
        "Genre": "Other",
        "Revenue (Millions)": 3.59,
        "Rating": 6.2
      },
      {
        "Title": "A Million Ways to Die in the West",
        "Genre": "Comedy",
        "Revenue (Millions)": 42.62,
        "Rating": 6.1
      },
      {
        "Title": "Only for One Night",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 4.6
      },
      {
        "Title": "Rules Don't Apply",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.65,
        "Rating": 5.7
      },
      {
        "Title": "Ouija: Origin of Evil",
        "Genre": "Horror",
        "Revenue (Millions)": 34.9,
        "Rating": 6.1
      },
      {
        "Title": "Percy Jackson: Sea of Monsters",
        "Genre": "Adventure",
        "Revenue (Millions)": 68.56,
        "Rating": 5.9
      },
      {
        "Title": "Fracture",
        "Genre": "Crime",
        "Revenue (Millions)": 39,
        "Rating": 7.2
      },
      {
        "Title": "Oculus",
        "Genre": "Horror",
        "Revenue (Millions)": 27.69,
        "Rating": 6.5
      },
      {
        "Title": "In Bruges",
        "Genre": "Comedy",
        "Revenue (Millions)": 7.76,
        "Rating": 7.9
      },
      {
        "Title": "This Means War",
        "Genre": "Action",
        "Revenue (Millions)": 54.76,
        "Rating": 6.3
      },
      {
        "Title": "Lída Baarová",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5
      },
      {
        "Title": "The Road",
        "Genre": "Adventure",
        "Revenue (Millions)": 0.06,
        "Rating": 7.3
      },
      {
        "Title": "Lavender",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.2
      },
      {
        "Title": "Deuces",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.6
      },
      {
        "Title": "Conan the Barbarian",
        "Genre": "Action",
        "Revenue (Millions)": 21.27,
        "Rating": 5.2
      },
      {
        "Title": "The Fighter",
        "Genre": "Action",
        "Revenue (Millions)": 93.57,
        "Rating": 7.8
      },
      {
        "Title": "August Rush",
        "Genre": "Other",
        "Revenue (Millions)": 31.66,
        "Rating": 7.5
      },
      {
        "Title": "Chef",
        "Genre": "Comedy",
        "Revenue (Millions)": 31.24,
        "Rating": 7.3
      },
      {
        "Title": "Eye in the Sky",
        "Genre": "Other",
        "Revenue (Millions)": 18.7,
        "Rating": 7.3
      },
      {
        "Title": "Eagle Eye",
        "Genre": "Action",
        "Revenue (Millions)": 101.11,
        "Rating": 6.6
      },
      {
        "Title": "The Purge",
        "Genre": "Horror",
        "Revenue (Millions)": 64.42,
        "Rating": 5.7
      },
      {
        "Title": "PK",
        "Genre": "Comedy",
        "Revenue (Millions)": 10.57,
        "Rating": 8.2
      },
      {
        "Title": "Ender's Game",
        "Genre": "Action",
        "Revenue (Millions)": 61.66,
        "Rating": 6.7
      },
      {
        "Title": "Indiana Jones and the Kingdom of the Crystal Skull",
        "Genre": "Action",
        "Revenue (Millions)": 317.01,
        "Rating": 6.2
      },
      {
        "Title": "Paper Towns",
        "Genre": "Other",
        "Revenue (Millions)": 31.99,
        "Rating": 6.3
      },
      {
        "Title": "High-Rise",
        "Genre": "Other",
        "Revenue (Millions)": 0.34,
        "Rating": 5.7
      },
      {
        "Title": "Quantum of Solace",
        "Genre": "Action",
        "Revenue (Millions)": 168.37,
        "Rating": 6.6
      },
      {
        "Title": "The Assignment",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 4.5
      },
      {
        "Title": "How to Train Your Dragon",
        "Genre": "Animation",
        "Revenue (Millions)": 217.39,
        "Rating": 8.1
      },
      {
        "Title": "Lady in the Water",
        "Genre": "Other",
        "Revenue (Millions)": 42.27,
        "Rating": 5.6
      },
      {
        "Title": "The Fountain",
        "Genre": "Other",
        "Revenue (Millions)": 10.14,
        "Rating": 7.3
      },
      {
        "Title": "Cars 2",
        "Genre": "Animation",
        "Revenue (Millions)": 191.45,
        "Rating": 6.2
      },
      {
        "Title": 31,
        "Genre": "Horror",
        "Revenue (Millions)": 0.78,
        "Rating": 5.1
      },
      {
        "Title": "Final Girl",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 4.7
      },
      {
        "Title": "Chalk It Up",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 4.8
      },
      {
        "Title": "The Man Who Knew Infinity",
        "Genre": "Other",
        "Revenue (Millions)": 3.86,
        "Rating": 7.2
      },
      {
        "Title": "Unknown",
        "Genre": "Action",
        "Revenue (Millions)": 61.09,
        "Rating": 6.9
      },
      {
        "Title": "Self/less",
        "Genre": "Action",
        "Revenue (Millions)": 12.28,
        "Rating": 6.5
      },
      {
        "Title": "Mr. Brooks",
        "Genre": "Crime",
        "Revenue (Millions)": 28.48,
        "Rating": 7.3
      },
      {
        "Title": "Tramps",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6.5
      },
      {
        "Title": "Before We Go",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.04,
        "Rating": 6.9
      },
      {
        "Title": "Captain Phillips",
        "Genre": "Other",
        "Revenue (Millions)": 107.1,
        "Rating": 7.8
      },
      {
        "Title": "The Secret Scripture",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.8
      },
      {
        "Title": "Max Steel",
        "Genre": "Action",
        "Revenue (Millions)": 3.77,
        "Rating": 4.6
      },
      {
        "Title": "Hotel Transylvania 2",
        "Genre": "Animation",
        "Revenue (Millions)": 169.69,
        "Rating": 6.7
      },
      {
        "Title": "Hancock",
        "Genre": "Action",
        "Revenue (Millions)": 227.95,
        "Rating": 6.4
      },
      {
        "Title": "Sisters",
        "Genre": "Comedy",
        "Revenue (Millions)": 87.03,
        "Rating": 6
      },
      {
        "Title": "The Family",
        "Genre": "Comedy",
        "Revenue (Millions)": 36.92,
        "Rating": 6.3
      },
      {
        "Title": "Zack and Miri Make a Porno",
        "Genre": "Comedy",
        "Revenue (Millions)": 31.45,
        "Rating": 6.6
      },
      {
        "Title": "Ma vie de Courgette",
        "Genre": "Animation",
        "Revenue (Millions)": 0.29,
        "Rating": 7.8
      },
      {
        "Title": "Man on a Ledge",
        "Genre": "Action",
        "Revenue (Millions)": 18.6,
        "Rating": 6.6
      },
      {
        "Title": "No Strings Attached",
        "Genre": "Comedy",
        "Revenue (Millions)": 70.63,
        "Rating": 6.2
      },
      {
        "Title": "Rescue Dawn",
        "Genre": "Adventure",
        "Revenue (Millions)": 5.48,
        "Rating": 7.3
      },
      {
        "Title": "Despicable Me 2",
        "Genre": "Animation",
        "Revenue (Millions)": 368.05,
        "Rating": 7.4
      },
      {
        "Title": "A Walk Among the Tombstones",
        "Genre": "Crime",
        "Revenue (Millions)": 25.98,
        "Rating": 6.5
      },
      {
        "Title": "The World's End",
        "Genre": "Action",
        "Revenue (Millions)": 26,
        "Rating": 7
      },
      {
        "Title": "Yoga Hosers",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 4.3
      },
      {
        "Title": "Seven Psychopaths",
        "Genre": "Comedy",
        "Revenue (Millions)": 14.99,
        "Rating": 7.2
      },
      {
        "Title": "Beowulf",
        "Genre": "Animation",
        "Revenue (Millions)": 82.16,
        "Rating": 6.2
      },
      {
        "Title": "Jack Ryan: Shadow Recruit",
        "Genre": "Action",
        "Revenue (Millions)": 50.55,
        "Rating": 6.2
      },
      {
        "Title": 1408,
        "Genre": "Fantasy",
        "Revenue (Millions)": 71.98,
        "Rating": 6.8
      },
      {
        "Title": "The Gambler",
        "Genre": "Crime",
        "Revenue (Millions)": 33.63,
        "Rating": 6
      },
      {
        "Title": "Prince of Persia: The Sands of Time",
        "Genre": "Action",
        "Revenue (Millions)": 90.76,
        "Rating": 6.6
      },
      {
        "Title": "The Spectacular Now",
        "Genre": "Comedy",
        "Revenue (Millions)": 6.85,
        "Rating": 7.1
      },
      {
        "Title": "A United Kingdom",
        "Genre": "Other",
        "Revenue (Millions)": 3.9,
        "Rating": 6.8
      },
      {
        "Title": "USS Indianapolis: Men of Courage",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 5.2
      },
      {
        "Title": "Turbo Kid",
        "Genre": "Action",
        "Revenue (Millions)": 0.05,
        "Rating": 6.7
      },
      {
        "Title": "Mama",
        "Genre": "Horror",
        "Revenue (Millions)": 71.59,
        "Rating": 6.2
      },
      {
        "Title": "Orphan",
        "Genre": "Horror",
        "Revenue (Millions)": 41.57,
        "Rating": 7
      },
      {
        "Title": "To Rome with Love",
        "Genre": "Comedy",
        "Revenue (Millions)": 16.68,
        "Rating": 6.3
      },
      {
        "Title": "Fantastic Mr. Fox",
        "Genre": "Animation",
        "Revenue (Millions)": 21,
        "Rating": 7.8
      },
      {
        "Title": "Inside Man",
        "Genre": "Crime",
        "Revenue (Millions)": 88.5,
        "Rating": 7.6
      },
      {
        "Title": "I.T.",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 5.4
      },
      {
        "Title": "127 Hours",
        "Genre": "Adventure",
        "Revenue (Millions)": 18.33,
        "Rating": 7.6
      },
      {
        "Title": "Annabelle",
        "Genre": "Horror",
        "Revenue (Millions)": 84.26,
        "Rating": 5.4
      },
      {
        "Title": "Wolves at the Door",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 4.6
      },
      {
        "Title": "Suite Française",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "The Imaginarium of Doctor Parnassus",
        "Genre": "Adventure",
        "Revenue (Millions)": 7.69,
        "Rating": 6.8
      },
      {
        "Title": "G.I. Joe: The Rise of Cobra",
        "Genre": "Action",
        "Revenue (Millions)": 150.17,
        "Rating": 5.8
      },
      {
        "Title": "Christine",
        "Genre": "Other",
        "Revenue (Millions)": 0.3,
        "Rating": 7
      },
      {
        "Title": "Man Down",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.8
      },
      {
        "Title": "Crawlspace",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 5.3
      },
      {
        "Title": "Shut In",
        "Genre": "Other",
        "Revenue (Millions)": 6.88,
        "Rating": 4.6
      },
      {
        "Title": "The Warriors Gate",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 5.3
      },
      {
        "Title": "Grindhouse",
        "Genre": "Action",
        "Revenue (Millions)": 25.03,
        "Rating": 7.6
      },
      {
        "Title": "Disaster Movie",
        "Genre": "Comedy",
        "Revenue (Millions)": 14.17,
        "Rating": 1.9
      },
      {
        "Title": "Rocky Balboa",
        "Genre": "Other",
        "Revenue (Millions)": 70.27,
        "Rating": 7.2
      },
      {
        "Title": "Diary of a Wimpy Kid: Dog Days",
        "Genre": "Comedy",
        "Revenue (Millions)": 49,
        "Rating": 6.4
      },
      {
        "Title": "Jane Eyre",
        "Genre": "Other",
        "Revenue (Millions)": 11.23,
        "Rating": 7.4
      },
      {
        "Title": "Fool's Gold",
        "Genre": "Action",
        "Revenue (Millions)": 70.22,
        "Rating": 5.7
      },
      {
        "Title": "The Dictator",
        "Genre": "Comedy",
        "Revenue (Millions)": 59.62,
        "Rating": 6.4
      },
      {
        "Title": "The Loft",
        "Genre": "Other",
        "Revenue (Millions)": 5.98,
        "Rating": 6.3
      },
      {
        "Title": "Bacalaureat",
        "Genre": "Crime",
        "Revenue (Millions)": 0.13,
        "Rating": 7.5
      },
      {
        "Title": "You Don't Mess with the Zohan",
        "Genre": "Action",
        "Revenue (Millions)": 100.02,
        "Rating": 5.5
      },
      {
        "Title": "Exposed",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 4.2
      },
      {
        "Title": "Maudie",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7.8
      },
      {
        "Title": "Horrible Bosses 2",
        "Genre": "Comedy",
        "Revenue (Millions)": 54.41,
        "Rating": 6.3
      },
      {
        "Title": "A Bigger Splash",
        "Genre": "Other",
        "Revenue (Millions)": 1.98,
        "Rating": 6.4
      },
      {
        "Title": "Melancholia",
        "Genre": "Other",
        "Revenue (Millions)": 3.03,
        "Rating": 7.1
      },
      {
        "Title": "The Princess and the Frog",
        "Genre": "Animation",
        "Revenue (Millions)": 104.37,
        "Rating": 7.1
      },
      {
        "Title": "Unstoppable",
        "Genre": "Action",
        "Revenue (Millions)": 81.56,
        "Rating": 6.8
      },
      {
        "Title": "Flight",
        "Genre": "Other",
        "Revenue (Millions)": 93.75,
        "Rating": 7.3
      },
      {
        "Title": "Home",
        "Genre": "Animation",
        "Revenue (Millions)": 177.34,
        "Rating": 6.7
      },
      {
        "Title": "La migliore offerta",
        "Genre": "Crime",
        "Revenue (Millions)": 0.09,
        "Rating": 7.8
      },
      {
        "Title": "Mean Dreams",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.3
      },
      {
        "Title": 42,
        "Genre": "Other",
        "Revenue (Millions)": 95,
        "Rating": 7.5
      },
      {
        "Title": 21,
        "Genre": "Crime",
        "Revenue (Millions)": 81.16,
        "Rating": 6.8
      },
      {
        "Title": "Begin Again",
        "Genre": "Other",
        "Revenue (Millions)": 16.17,
        "Rating": 7.4
      },
      {
        "Title": "Out of the Furnace",
        "Genre": "Crime",
        "Revenue (Millions)": 11.33,
        "Rating": 6.8
      },
      {
        "Title": "Vicky Cristina Barcelona",
        "Genre": "Other",
        "Revenue (Millions)": 23.21,
        "Rating": 7.1
      },
      {
        "Title": "Kung Fu Panda",
        "Genre": "Animation",
        "Revenue (Millions)": 215.4,
        "Rating": 7.6
      },
      {
        "Title": "Barbershop: The Next Cut",
        "Genre": "Comedy",
        "Revenue (Millions)": 54.01,
        "Rating": 5.9
      },
      {
        "Title": "Terminator Salvation",
        "Genre": "Action",
        "Revenue (Millions)": 125.32,
        "Rating": 6.6
      },
      {
        "Title": "Freedom Writers",
        "Genre": "Other",
        "Revenue (Millions)": 36.58,
        "Rating": 7.5
      },
      {
        "Title": "The Hills Have Eyes",
        "Genre": "Horror",
        "Revenue (Millions)": 41.78,
        "Rating": 6.4
      },
      {
        "Title": "Changeling",
        "Genre": "Other",
        "Revenue (Millions)": 35.71,
        "Rating": 7.8
      },
      {
        "Title": "Remember Me",
        "Genre": "Other",
        "Revenue (Millions)": 19.06,
        "Rating": 7.2
      },
      {
        "Title": "Koe no katachi",
        "Genre": "Animation",
        "Revenue (Millions)": null,
        "Rating": 8.4
      },
      {
        "Title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
        "Genre": "Comedy",
        "Revenue (Millions)": 66.95,
        "Rating": 6.2
      },
      {
        "Title": "Locke",
        "Genre": "Other",
        "Revenue (Millions)": 1.36,
        "Rating": 7.1
      },
      {
        "Title": "The 9th Life of Louis Drax",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.3
      },
      {
        "Title": "Horns",
        "Genre": "Other",
        "Revenue (Millions)": 0.16,
        "Rating": 6.5
      },
      {
        "Title": "Indignation",
        "Genre": "Other",
        "Revenue (Millions)": 3.4,
        "Rating": 6.9
      },
      {
        "Title": "The Stanford Prison Experiment",
        "Genre": "Other",
        "Revenue (Millions)": 0.64,
        "Rating": 6.9
      },
      {
        "Title": "Diary of a Wimpy Kid: Rodrick Rules",
        "Genre": "Comedy",
        "Revenue (Millions)": 52.69,
        "Rating": 6.6
      },
      {
        "Title": "Mission: Impossible III",
        "Genre": "Action",
        "Revenue (Millions)": 133.38,
        "Rating": 6.9
      },
      {
        "Title": "En man som heter Ove",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.36,
        "Rating": 7.7
      },
      {
        "Title": "Dragonball Evolution",
        "Genre": "Action",
        "Revenue (Millions)": 9.35,
        "Rating": 2.7
      },
      {
        "Title": "Red Dawn",
        "Genre": "Action",
        "Revenue (Millions)": 44.8,
        "Rating": 5.4
      },
      {
        "Title": "One Day",
        "Genre": "Other",
        "Revenue (Millions)": 13.77,
        "Rating": 7
      },
      {
        "Title": "Life as We Know It",
        "Genre": "Comedy",
        "Revenue (Millions)": 53.36,
        "Rating": 6.6
      },
      {
        "Title": "28 Weeks Later",
        "Genre": "Other",
        "Revenue (Millions)": 28.64,
        "Rating": 7
      },
      {
        "Title": "Warm Bodies",
        "Genre": "Comedy",
        "Revenue (Millions)": 66.36,
        "Rating": 6.9
      },
      {
        "Title": "Blue Jasmine",
        "Genre": "Other",
        "Revenue (Millions)": 33.4,
        "Rating": 7.3
      },
      {
        "Title": "G.I. Joe: Retaliation",
        "Genre": "Action",
        "Revenue (Millions)": 122.51,
        "Rating": 5.8
      },
      {
        "Title": "Wrath of the Titans",
        "Genre": "Action",
        "Revenue (Millions)": 83.64,
        "Rating": 5.8
      },
      {
        "Title": "Shin Gojira",
        "Genre": "Action",
        "Revenue (Millions)": 1.91,
        "Rating": 6.9
      },
      {
        "Title": "Saving Mr. Banks",
        "Genre": "Other",
        "Revenue (Millions)": 83.3,
        "Rating": 7.5
      },
      {
        "Title": "Transcendence",
        "Genre": "Other",
        "Revenue (Millions)": 23.01,
        "Rating": 6.3
      },
      {
        "Title": "Rio",
        "Genre": "Animation",
        "Revenue (Millions)": 143.62,
        "Rating": 6.9
      },
      {
        "Title": "Equals",
        "Genre": "Other",
        "Revenue (Millions)": 0.03,
        "Rating": 6.1
      },
      {
        "Title": "Babel",
        "Genre": "Other",
        "Revenue (Millions)": 34.3,
        "Rating": 7.5
      },
      {
        "Title": "The Tree of Life",
        "Genre": "Other",
        "Revenue (Millions)": 13.3,
        "Rating": 6.8
      },
      {
        "Title": "The Lucky One",
        "Genre": "Other",
        "Revenue (Millions)": 60.44,
        "Rating": 6.5
      },
      {
        "Title": "Piranha 3D",
        "Genre": "Comedy",
        "Revenue (Millions)": 25,
        "Rating": 5.5
      },
      {
        "Title": "50/50",
        "Genre": "Comedy",
        "Revenue (Millions)": 34.96,
        "Rating": 7.7
      },
      {
        "Title": "The Intent",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 3.5
      },
      {
        "Title": "This Is 40",
        "Genre": "Comedy",
        "Revenue (Millions)": 67.52,
        "Rating": 6.2
      },
      {
        "Title": "Real Steel",
        "Genre": "Action",
        "Revenue (Millions)": 85.46,
        "Rating": 7.1
      },
      {
        "Title": "Sex and the City",
        "Genre": "Comedy",
        "Revenue (Millions)": 152.64,
        "Rating": 5.5
      },
      {
        "Title": "Rambo",
        "Genre": "Action",
        "Revenue (Millions)": 42.72,
        "Rating": 7.1
      },
      {
        "Title": "Planet Terror",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 7.1
      },
      {
        "Title": "Concussion",
        "Genre": "Other",
        "Revenue (Millions)": 34.53,
        "Rating": 7.1
      },
      {
        "Title": "The Fall",
        "Genre": "Adventure",
        "Revenue (Millions)": 2.28,
        "Rating": 7.9
      },
      {
        "Title": "The Ugly Truth",
        "Genre": "Comedy",
        "Revenue (Millions)": 88.92,
        "Rating": 6.5
      },
      {
        "Title": "Bride Wars",
        "Genre": "Comedy",
        "Revenue (Millions)": 58.72,
        "Rating": 5.5
      },
      {
        "Title": "Sleeping with Other People",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.81,
        "Rating": 6.5
      },
      {
        "Title": "Snakes on a Plane",
        "Genre": "Action",
        "Revenue (Millions)": 34.01,
        "Rating": 5.6
      },
      {
        "Title": "What If",
        "Genre": "Comedy",
        "Revenue (Millions)": 3.45,
        "Rating": 6.8
      },
      {
        "Title": "How to Train Your Dragon 2",
        "Genre": "Animation",
        "Revenue (Millions)": 177,
        "Rating": 7.9
      },
      {
        "Title": "RoboCop",
        "Genre": "Action",
        "Revenue (Millions)": 58.61,
        "Rating": 6.2
      },
      {
        "Title": "In Dubious Battle",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.2
      },
      {
        "Title": "Hello, My Name Is Doris",
        "Genre": "Comedy",
        "Revenue (Millions)": 14.44,
        "Rating": 6.7
      },
      {
        "Title": "Ocean's Thirteen",
        "Genre": "Crime",
        "Revenue (Millions)": 117.14,
        "Rating": 6.9
      },
      {
        "Title": "Slither",
        "Genre": "Comedy",
        "Revenue (Millions)": 7.77,
        "Rating": 6.5
      },
      {
        "Title": "Contagion",
        "Genre": "Other",
        "Revenue (Millions)": 75.64,
        "Rating": 6.6
      },
      {
        "Title": "Il racconto dei racconti - Tale of Tales",
        "Genre": "Other",
        "Revenue (Millions)": 0.08,
        "Rating": 6.4
      },
      {
        "Title": "I Am the Pretty Thing That Lives in the House",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 4.7
      },
      {
        "Title": "Bridge to Terabithia",
        "Genre": "Adventure",
        "Revenue (Millions)": 82.23,
        "Rating": 7.2
      },
      {
        "Title": "Coherence",
        "Genre": "Other",
        "Revenue (Millions)": 0.07,
        "Rating": 7.2
      },
      {
        "Title": "Notorious",
        "Genre": "Other",
        "Revenue (Millions)": 36.84,
        "Rating": 6.7
      },
      {
        "Title": "Goksung",
        "Genre": "Other",
        "Revenue (Millions)": 0.79,
        "Rating": 7.5
      },
      {
        "Title": "The Expendables 2",
        "Genre": "Action",
        "Revenue (Millions)": 85.02,
        "Rating": 6.6
      },
      {
        "Title": "The Girl Next Door",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.7
      },
      {
        "Title": "Perfume: The Story of a Murderer",
        "Genre": "Crime",
        "Revenue (Millions)": 2.21,
        "Rating": 7.5
      },
      {
        "Title": "The Golden Compass",
        "Genre": "Adventure",
        "Revenue (Millions)": 70.08,
        "Rating": 6.1
      },
      {
        "Title": "Centurion",
        "Genre": "Action",
        "Revenue (Millions)": 0.12,
        "Rating": 6.4
      },
      {
        "Title": "Scouts Guide to the Zombie Apocalypse",
        "Genre": "Action",
        "Revenue (Millions)": 3.64,
        "Rating": 6.3
      },
      {
        "Title": "17 Again",
        "Genre": "Comedy",
        "Revenue (Millions)": 64.15,
        "Rating": 6.4
      },
      {
        "Title": "No Escape",
        "Genre": "Action",
        "Revenue (Millions)": 27.29,
        "Rating": 6.8
      },
      {
        "Title": "Superman Returns",
        "Genre": "Action",
        "Revenue (Millions)": 200.07,
        "Rating": 6.1
      },
      {
        "Title": "The Twilight Saga: Breaking Dawn - Part 1",
        "Genre": "Adventure",
        "Revenue (Millions)": 281.28,
        "Rating": 4.9
      },
      {
        "Title": "Precious",
        "Genre": "Other",
        "Revenue (Millions)": 47.54,
        "Rating": 7.3
      },
      {
        "Title": "The Sea of Trees",
        "Genre": "Other",
        "Revenue (Millions)": 0.02,
        "Rating": 5.9
      },
      {
        "Title": "Good Kids",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 6.1
      },
      {
        "Title": "The Master",
        "Genre": "Other",
        "Revenue (Millions)": 16.38,
        "Rating": 7.1
      },
      {
        "Title": "Footloose",
        "Genre": "Comedy",
        "Revenue (Millions)": 51.78,
        "Rating": 5.9
      },
      {
        "Title": "If I Stay",
        "Genre": "Other",
        "Revenue (Millions)": 50.46,
        "Rating": 6.8
      },
      {
        "Title": "The Ticket",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.4
      },
      {
        "Title": "Detour",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.3
      },
      {
        "Title": "The Love Witch",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.22,
        "Rating": 6.2
      },
      {
        "Title": "Talladega Nights: The Ballad of Ricky Bobby",
        "Genre": "Action",
        "Revenue (Millions)": 148.21,
        "Rating": 6.6
      },
      {
        "Title": "The Human Centipede (First Sequence)",
        "Genre": "Horror",
        "Revenue (Millions)": 0.18,
        "Rating": 4.4
      },
      {
        "Title": "Super",
        "Genre": "Comedy",
        "Revenue (Millions)": 0.32,
        "Rating": 6.8
      },
      {
        "Title": "The Siege of Jadotville",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 7.3
      },
      {
        "Title": "Up in the Air",
        "Genre": "Other",
        "Revenue (Millions)": 83.81,
        "Rating": 7.4
      },
      {
        "Title": "The Midnight Meat Train",
        "Genre": "Horror",
        "Revenue (Millions)": 0.07,
        "Rating": 6.1
      },
      {
        "Title": "The Twilight Saga: Eclipse",
        "Genre": "Adventure",
        "Revenue (Millions)": 300.52,
        "Rating": 4.9
      },
      {
        "Title": "Transpecos",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 5.8
      },
      {
        "Title": "What's Your Number?",
        "Genre": "Comedy",
        "Revenue (Millions)": 13.99,
        "Rating": 6.1
      },
      {
        "Title": "Riddick",
        "Genre": "Action",
        "Revenue (Millions)": 42,
        "Rating": 6.4
      },
      {
        "Title": "Triangle",
        "Genre": "Fantasy",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "The Butler",
        "Genre": "Other",
        "Revenue (Millions)": 116.63,
        "Rating": 7.2
      },
      {
        "Title": "King Cobra",
        "Genre": "Crime",
        "Revenue (Millions)": 0.03,
        "Rating": 5.6
      },
      {
        "Title": "After Earth",
        "Genre": "Action",
        "Revenue (Millions)": 60.52,
        "Rating": 4.9
      },
      {
        "Title": "Kicks",
        "Genre": "Adventure",
        "Revenue (Millions)": 0.15,
        "Rating": 6.1
      },
      {
        "Title": "Me and Earl and the Dying Girl",
        "Genre": "Comedy",
        "Revenue (Millions)": 6.74,
        "Rating": 7.8
      },
      {
        "Title": "The Descendants",
        "Genre": "Comedy",
        "Revenue (Millions)": 82.62,
        "Rating": 7.3
      },
      {
        "Title": "Sex and the City 2",
        "Genre": "Comedy",
        "Revenue (Millions)": 95.33,
        "Rating": 4.3
      },
      {
        "Title": "The Kings of Summer",
        "Genre": "Adventure",
        "Revenue (Millions)": 1.29,
        "Rating": 7.2
      },
      {
        "Title": "Death Race",
        "Genre": "Action",
        "Revenue (Millions)": 36.06,
        "Rating": 6.4
      },
      {
        "Title": "That Awkward Moment",
        "Genre": "Comedy",
        "Revenue (Millions)": 26.05,
        "Rating": 6.2
      },
      {
        "Title": "Legion",
        "Genre": "Action",
        "Revenue (Millions)": 40.17,
        "Rating": 5.2
      },
      {
        "Title": "End of Watch",
        "Genre": "Crime",
        "Revenue (Millions)": 40.98,
        "Rating": 7.7
      },
      {
        "Title": "3 Days to Kill",
        "Genre": "Action",
        "Revenue (Millions)": 30.69,
        "Rating": 6.2
      },
      {
        "Title": "Lucky Number Slevin",
        "Genre": "Crime",
        "Revenue (Millions)": 22.49,
        "Rating": 7.8
      },
      {
        "Title": "Trance",
        "Genre": "Crime",
        "Revenue (Millions)": 2.32,
        "Rating": 7
      },
      {
        "Title": "Into the Forest",
        "Genre": "Other",
        "Revenue (Millions)": 0.01,
        "Rating": 5.9
      },
      {
        "Title": "The Other Boleyn Girl",
        "Genre": "Other",
        "Revenue (Millions)": 26.81,
        "Rating": 6.7
      },
      {
        "Title": "I Spit on Your Grave",
        "Genre": "Crime",
        "Revenue (Millions)": 0.09,
        "Rating": 6.3
      },
      {
        "Title": "Custody",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.9
      },
      {
        "Title": "Inland Empire",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7
      },
      {
        "Title": "L'odyssée",
        "Genre": "Adventure",
        "Revenue (Millions)": null,
        "Rating": 6.7
      },
      {
        "Title": "The Walk",
        "Genre": "Adventure",
        "Revenue (Millions)": 10.14,
        "Rating": 7.3
      },
      {
        "Title": "Wrecker",
        "Genre": "Action",
        "Revenue (Millions)": null,
        "Rating": 3.5
      },
      {
        "Title": "The Lone Ranger",
        "Genre": "Action",
        "Revenue (Millions)": 89.29,
        "Rating": 6.5
      },
      {
        "Title": "Texas Chainsaw 3D",
        "Genre": "Horror",
        "Revenue (Millions)": 34.33,
        "Rating": 4.8
      },
      {
        "Title": "Disturbia",
        "Genre": "Other",
        "Revenue (Millions)": 80.05,
        "Rating": 6.9
      },
      {
        "Title": "Rock of Ages",
        "Genre": "Comedy",
        "Revenue (Millions)": 38.51,
        "Rating": 5.9
      },
      {
        "Title": "Scream 4",
        "Genre": "Horror",
        "Revenue (Millions)": 38.18,
        "Rating": 6.2
      },
      {
        "Title": "Queen of Katwe",
        "Genre": "Other",
        "Revenue (Millions)": 8.81,
        "Rating": 7.4
      },
      {
        "Title": "My Big Fat Greek Wedding 2",
        "Genre": "Comedy",
        "Revenue (Millions)": 59.57,
        "Rating": 6
      },
      {
        "Title": "Dark Places",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 6.2
      },
      {
        "Title": "Amateur Night",
        "Genre": "Comedy",
        "Revenue (Millions)": null,
        "Rating": 5
      },
      {
        "Title": "It's Only the End of the World",
        "Genre": "Other",
        "Revenue (Millions)": null,
        "Rating": 7
      },
      {
        "Title": "The Skin I Live In",
        "Genre": "Other",
        "Revenue (Millions)": 3.19,
        "Rating": 7.6
      },
      {
        "Title": "Miracles from Heaven",
        "Genre": "Other",
        "Revenue (Millions)": 61.69,
        "Rating": 7
      },
      {
        "Title": "Annie",
        "Genre": "Comedy",
        "Revenue (Millions)": 85.91,
        "Rating": 5.3
      },
      {
        "Title": "Across the Universe",
        "Genre": "Other",
        "Revenue (Millions)": 24.34,
        "Rating": 7.4
      },
      {
        "Title": "Let's Be Cops",
        "Genre": "Comedy",
        "Revenue (Millions)": 82.39,
        "Rating": 6.5
      },
      {
        "Title": "Max",
        "Genre": "Adventure",
        "Revenue (Millions)": 42.65,
        "Rating": 6.8
      },
      {
        "Title": "Your Highness",
        "Genre": "Adventure",
        "Revenue (Millions)": 21.56,
        "Rating": 5.6
      },
      {
        "Title": "Final Destination 5",
        "Genre": "Horror",
        "Revenue (Millions)": 42.58,
        "Rating": 5.9
      },
      {
        "Title": "Endless Love",
        "Genre": "Other",
        "Revenue (Millions)": 23.39,
        "Rating": 6.3
      },
      {
        "Title": "Martyrs",
        "Genre": "Horror",
        "Revenue (Millions)": null,
        "Rating": 7.1
      },
      {
        "Title": "Selma",
        "Genre": "Other",
        "Revenue (Millions)": 52.07,
        "Rating": 7.5
      },
      {
        "Title": "Underworld: Rise of the Lycans",
        "Genre": "Action",
        "Revenue (Millions)": 45.8,
        "Rating": 6.6
      },
      {
        "Title": "Taare Zameen Par",
        "Genre": "Other",
        "Revenue (Millions)": 1.2,
        "Rating": 8.5
      },
      {
        "Title": "Take Me Home Tonight",
        "Genre": "Comedy",
        "Revenue (Millions)": 6.92,
        "Rating": 6.3
      },
      {
        "Title": "Resident Evil: Afterlife",
        "Genre": "Action",
        "Revenue (Millions)": 60.13,
        "Rating": 5.9
      },
      {
        "Title": "Project X",
        "Genre": "Comedy",
        "Revenue (Millions)": 54.72,
        "Rating": 6.7
      },
      {
        "Title": "Secret in Their Eyes",
        "Genre": "Crime",
        "Revenue (Millions)": null,
        "Rating": 6.2
      },
      {
        "Title": "Hostel: Part II",
        "Genre": "Horror",
        "Revenue (Millions)": 17.54,
        "Rating": 5.5
      },
      {
        "Title": "Step Up 2: The Streets",
        "Genre": "Other",
        "Revenue (Millions)": 58.01,
        "Rating": 6.2
      },
      {
        "Title": "Search Party",
        "Genre": "Adventure",
        "Revenue (Millions)": null,
        "Rating": 5.6
      },
      {
        "Title": "Nine Lives",
        "Genre": "Comedy",
        "Revenue (Millions)": 19.64,
        "Rating": 5.3
      }
    ];

    @Input()
    @prizmDefaultProp()
    theme: null | PrizmChartTheme = null;


    @ViewChild('container', {static: true, read: ElementRef}) container: ElementRef<HTMLElement>;

    ngOnInit(): void {
      prizmChartsSetDefaultThemes();

      const scatterPlot = new Scatter(this.container.nativeElement, {
        appendPadding: 10,
        data: this.data,
        xField: 'Revenue (Millions)',
        yField: 'Rating',
        shape: 'circle',
        colorField: 'Genre',
        size: 4,
        yAxis: {
          nice: true,
          line: {
            style: {
              stroke: '#aaa',
            },
          },
        },
        xAxis: {
          min: -100,
          grid: {
            line: {
              style: {
                stroke: '#eee',
              },
            },
          },
          line: {
            style: {
              stroke: '#aaa',
            },
          },
        },
      });
      scatterPlot.render();
    }
}