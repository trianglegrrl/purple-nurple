import Model from 'ember-data/model';
import attr from 'ember-data/attr';

var ElectoralVotes = Model.extend({
  stateName: attr('string'),
  stateAbbrev: attr('string'),
  electoralVotes: attr('number'),
  year: attr('number'),
});

ElectoralVotes.reopenClass({
  FIXTURES: [
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 75.8,
      "party": "Rep",
      "value": 44.3
    },
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 24.3,
      "party": "Dem",
      "value": 41.9
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 6.2
    }
    ],
    "id": 770,
    "last_updated": "2016-05-21T03:49:24.000Z",
    "poll_count": 6,
    "short_title": "GA: Trump vs. Clinton",
    "slug": "2016-georgia-president-trump-vs-clinton",
    "state": "GA",
    "title": "2016 Georgia President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-georgia-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [],
    "id": 766,
    "last_updated": "2016-05-28T06:25:49.000Z",
    "poll_count": 3,
    "short_title": "MO President: Trump vs. Clinton",
    "slug": "2016-missouri-president-trump-vs-clinton",
    "state": "MO",
    "title": "2016 Missouri President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-missouri-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [],
    "id": 765,
    "last_updated": "2016-05-04T20:12:12.000Z",
    "poll_count": 3,
    "short_title": "MD President: Trump vs. Clinton",
    "slug": "2016-maryland-president-trump-vs-clinton",
    "state": "MD",
    "title": "2016 Maryland President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-maryland-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 98.3,
      "party": "Dem",
      "value": 47.3
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 1.7,
      "party": "Rep",
      "value": 37.3
    }
    ],
    "id": 764,
    "last_updated": "2016-05-14T01:04:34.000Z",
    "poll_count": 10,
    "short_title": "MI President: Trump vs. Clinton",
    "slug": "2016-michigan-president-trump-vs-clinton",
    "state": "MI",
    "title": "2016 Michigan President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-michigan-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [],
    "id": 763,
    "last_updated": "2016-05-17T19:40:03.000Z",
    "poll_count": 4,
    "short_title": "AZ President: Trump vs. Clinton",
    "slug": "2016-arizona-president-trump-vs-clinton",
    "state": "AZ",
    "title": "2016 Arizona President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-arizona-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [],
    "id": 762,
    "last_updated": "2016-05-04T19:54:38.000Z",
    "poll_count": 3,
    "short_title": "MN President: Trump vs. Clinton",
    "slug": "2016-minnesota-president-trump-vs-clinton",
    "state": "MN",
    "title": "2016 Minnesota President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-minnesota-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 91.8,
      "party": "Dem",
      "value": 42.3
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 8.2,
      "party": "Rep",
      "value": 38.4
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 12.4
    }
    ],
    "id": 761,
    "last_updated": "2016-05-26T16:47:06.000Z",
    "poll_count": 8,
    "short_title": "VA President: Trump vs. Clinton",
    "slug": "2016-virginia-president-trump-vs-clinton",
    "state": "VA",
    "title": "2016 Virginia President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-virginia-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 74.4,
      "party": "Dem",
      "value": 47.2
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 25.6,
      "party": "Rep",
      "value": 40.1
    }
    ],
    "id": 760,
    "last_updated": "2016-05-04T19:49:57.000Z",
    "poll_count": 7,
    "short_title": "IA: Trump vs. Clinton",
    "slug": "2016-iowa-president-trump-vs-clinton",
    "state": "IA",
    "title": "2016 Iowa President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-iowa-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 75.6,
      "party": "Rep",
      "value": 41.8
    },
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 24.5,
      "party": "Dem",
      "value": 40.3
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 9.3
    }
    ],
    "id": 759,
    "last_updated": "2016-05-29T06:12:11.000Z",
    "poll_count": 19,
    "short_title": "NC President: Trump vs. Clinton",
    "slug": "2016-north-carolina-president-trump-vs-clinton",
    "state": "NC",
    "title": "2016 North Carolina President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-north-carolina-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 100.0,
      "party": "Dem",
      "value": 47.6
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 0.0,
      "party": "Rep",
      "value": 35.6
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 8.6
    }
    ],
    "id": 758,
    "last_updated": "2016-05-26T20:42:06.000Z",
    "poll_count": 11,
    "short_title": "WI President: Trump vs. Clinton",
    "slug": "2016-wisconsin-president-trump-vs-clinton",
    "state": "WI",
    "title": "2016 Wisconsin President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-wisconsin-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 96.8,
      "party": "Dem",
      "value": 42.6
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 3.2,
      "party": "Rep",
      "value": 39.5
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 7.1
    }
    ],
    "id": 757,
    "last_updated": "2016-05-29T04:57:41.000Z",
    "poll_count": 11,
    "short_title": "OH: Trump vs. Clinton",
    "slug": "2016-ohio-president-trump-vs-clinton",
    "state": "OH",
    "title": "2016 Ohio President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-ohio-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 92.7,
      "party": "Dem",
      "value": 44.8
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 7.3,
      "party": "Rep",
      "value": 40.2
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 6.8
    }
    ],
    "id": 756,
    "last_updated": "2016-05-29T01:22:30.000Z",
    "poll_count": 9,
    "short_title": "PA: Trump vs. Clinton",
    "slug": "2016-pennsylvania-president-trump-vs-clinton",
    "state": "PA",
    "title": "2016 Pennsylvania President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-pennsylvania-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 100.0,
      "party": "Dem",
      "value": 54.4
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 0.0,
      "party": "Rep",
      "value": 33.3
    }
    ],
    "id": 755,
    "last_updated": "2016-05-04T17:11:06.000Z",
    "poll_count": 11,
    "short_title": "NY President: Trump vs. Clinton",
    "slug": "2016-new-york-president-trump-vs-clinton",
    "state": "NY",
    "title": "2016 New York President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-new-york-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 91.7,
      "party": "Dem",
      "value": 43.4
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 8.3,
      "party": "Rep",
      "value": 38.5
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 7.7
    }
    ],
    "id": 754,
    "last_updated": "2016-05-18T11:27:11.000Z",
    "poll_count": 16,
    "short_title": "NH: Trump vs. Clinton",
    "slug": "2016-new-hampshire-president-trump-vs-clinton",
    "state": "NH",
    "title": "2016 New Hampshire President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-new-hampshire-president-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 99.9,
      "party": "Dem",
      "value": 50.3
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 0.1,
      "party": "Rep",
      "value": 35.9
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 6.1
    }
    ],
    "id": 753,
    "last_updated": "2016-05-26T14:11:49.000Z",
    "poll_count": 6,
    "short_title": "CA: Trump vs. Clinton",
    "slug": "2016-california-presidential-general-election-trump-vs-clinton",
    "state": "CA",
    "title": "2016 California President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-california-presidential-general-election-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 95.9,
      "party": "Dem",
      "value": 44.3
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 4.2,
      "party": "Rep",
      "value": 41.5
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 2.5
    }
    ],
    "id": 752,
    "last_updated": "2016-05-29T00:17:20.000Z",
    "poll_count": 18,
    "short_title": "FL: Trump vs. Clinton",
    "slug": "2016-florida-presidential-general-election-trump-vs-clinton",
    "state": "FL",
    "title": "2016 Florida President: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-florida-presidential-general-election-trump-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [],
    "id": 670,
    "last_updated": "2016-04-12T13:02:09.000Z",
    "poll_count": 4,
    "short_title": "2016 President: Santorum vs. Clinton",
    "slug": "2016-general-election-santorum-vs-clinton",
    "state": "US",
    "title": "2016 General Election: Santorum vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-general-election-santorum-vs-clinton"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Sanders",
      "first_name": "Bernie",
      "incumbent": false,
      "last_name": "Sanders",
      "lead_confidence": 100.0,
      "party": "Dem",
      "value": 50.2
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 0.0,
      "party": "Rep",
      "value": 39.1
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 3.2
    }
    ],
    "id": 640,
    "last_updated": "2016-05-29T03:07:18.000Z",
    "poll_count": 78,
    "short_title": "2016 President: Trump vs. Sanders",
    "slug": "2016-general-election-trump-vs-sanders",
    "state": "US",
    "title": "2016 General Election: Trump vs. Sanders",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-general-election-trump-vs-sanders"
  },
  {
    "election_date": "2016-11-08",
    "estimates": [
    {
      "choice": "Clinton",
      "first_name": "Hillary",
      "incumbent": false,
      "last_name": "Clinton",
      "lead_confidence": 98.7,
      "party": "Dem",
      "value": 44.4
    },
    {
      "choice": "Trump",
      "first_name": "Donald",
      "incumbent": false,
      "last_name": "Trump",
      "lead_confidence": 1.3,
      "party": "Rep",
      "value": 40.1
    },
    {
      "choice": "Other",
      "first_name": null,
      "incumbent": false,
      "last_name": null,
      "lead_confidence": null,
      "party": "N/A",
      "value": 5.6
    }
    ],
    "id": 624,
    "last_updated": "2016-05-29T04:20:02.000Z",
    "poll_count": 164,
    "short_title": "2016 President: Trump vs. Clinton",
    "slug": "2016-general-election-trump-vs-clinton",
    "state": "US",
    "title": "2016 General Election: Trump vs. Clinton",
    "topic": "2016-president",
    "url": "http://elections.huffingtonpost.com/pollster/2016-general-election-trump-vs-clinton"
  }
  ]
});
