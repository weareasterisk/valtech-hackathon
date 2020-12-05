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
  title: "Thursday, Jan 14th",
  events: [
    {
      event: 'Opening Ceremony',
      time: '12:00 PM - 11:00 AM'
    },
    {
      event: 'Team Formation and Ideation',
      time: '2:00 PM - 3:00 PM'
    },
    {
      event: 'Workshops and Activities',
      time: '3:00 PM - 11:30 PM'
    },
  ]
};

const dayTwo = {
  title: "Saturday, Jan 15th",
  events: [
    {
      event: 'Rise and Shine',
      time: '8:00 AM'
    },
    {
      event: 'Hacking + Workshops and Activities',
      time: '9:00 AM - 11:30 PM'
    },
  ]
};

const dayThree = {
  title: "Sunday, Jan 16th",
  events: [
    {
      event: 'Rise and Shine',
      time: '8:00 AM'
    },
    {
      event: 'Project Submission Deadline',
      time: '10:30 AM'
    },
    {
      event: 'Judging',
      time: '11:30 AM'
    },
    {
      event: 'Closing Ceremony',
      time: '4:00 PM'
    },
  ]
};

export default [dayOne, dayTwo, dayThree];
