/**
 * Schedule object shape
 *
 * {
 *   event: '',
 *   time: ''
 * }
 *
 * */

const dayOne = {
  title: "Friday, August 7th",
  events: [
    {
      event: 'Opening Ceremony',
      time: '10:00 AM - 11:00 AM'
    },
    {
      event: 'Team Building Session',
      time: '12:00 PM - 1:00 PM'
    },
    {
      event: '[Game Dev Talk 1] TBA',
      time: '1:00 PM - 2:00 PM'
    },
    {
      event: 'Mentorship Office Hours',
      time: '3:00 PM - 5:00 PM'
    },
    {
      event: '[Game Dev Talk 2] TBA',
      time: '6:00 PM - 7:00 PM'
    }
  ]
};

const dayTwo = {
  title: "Saturday, August 8th",
  events: [
    {
      event: 'Midnight Mentorship',
      time: '12:00 AM - 2:00 AM'
    },
    {
      event: '[Game Dev Talk 3] TBA',
      time: '11:00 AM - 12:00 PM'
    },
    {
      event: 'Mentorship OH',
      time: '3:00 PM - 5:00 PM'
    },
    {
      event: '[Game Dev Talk 4] TBA',
      time: '6:00 PM - 7:00 PM'
    },
  ]
};

const dayThree = {
  title: "Sunday, August 9th",
  events: [
    {
      event: 'Midnight Mentorship',
      time: '12:00 AM - 2:00 AM'
    },
    {
      event: 'How to Submit',
      time: '8:30 AM - 9:00 AM'
    },
    {
      event: 'Submission Deadline',
      time: '9:30 AM'
    },
    {
      event: 'Failure Party',
      time: '10:00 AM - 11:00 AM'
    },
    {
      event: 'Judging',
      time: '10:00 AM - 12:00 PM'
    },
    {
      event: 'Closing Ceremony',
      time: '1:00 PM - 2:00 PM'
    }
  ]
};

export default [dayOne, dayTwo, dayThree];
