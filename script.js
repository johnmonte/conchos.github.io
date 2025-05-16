var app = new Vue({
  el: '#app',
  data: {
    meta: [], // Meta data from Google Sheet
    items: [] // Items data from Google Sheet
  },
  mounted () {
    // Fetch the Meta data from Sheetson API
    axios
      .get('https://api.sheetson.com/v2/sheets/Meta', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '17tcVnxqf4l-1enE5gBeJ0-1F5_ZjpDsI75cvHU_KfPKaLNTDtdYMJhEKZA',
          'X-Sheetson-Spreadsheet-Id': '1DufxG21O0oFlhE9Meofdgj3ejZCdL3fnjyNKV318q0Q'
        }
      })
      .then(response => (this.meta = response.data.results[0]))

    // Fetch the Items data from Sheetson API
    axios
      .get('https://api.sheetson.com/v2/sheets/PortfolioItems', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '17tcVnxqf4l-1enE5gBeJ0-1F5_ZjpDsI75cvHU_KfPKaLNTDtdYMJhEKZA',
          'X-Sheetson-Spreadsheet-Id': '1DufxG21O0oFlhE9Meofdgj3ejZCdL3fnjyNKV318q0Q'
        }
      })
      .then(response => (this.items = response.data.results))
  },
  methods: {
    // Convert comma seperated tags to an array
    getTags: function (tags) {
      return tags.split(',')
    }
  }
})