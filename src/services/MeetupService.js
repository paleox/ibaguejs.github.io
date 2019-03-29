import fetchJsonp from 'fetch-jsonp'

const baseURL = process.env.VUE_APP_MEETUP_URL

export default {
  getUpcomingEvents(page) {
    return fetchJsonp(
      `${baseURL}/events?desc=true&photo-host=public&page=${page}&sig_id=223811643&status=upcoming&sig=88be441521b1fab5ab1330461aa7a9a0101f86b5`
    ).then(response => response.json())
  },
  getPreviousEvents(page) {
    return fetchJsonp(
      `${baseURL}/events?desc=true&photo-host=public&page=${page}&sig_id=223811643&status=past&sig=92a8e04546d333cb9eef865344831eb1a284ee47`
    ).then(response => response.json())
  },
  getOrganizers(page) {
    return fetchJsonp(
      `${baseURL}/members?photo-host=public&role=leads&page=${page}&sig_id=223811643&sig=292d4f45b3d63e0d3f2bf0718f6f50c89a1e7f26`
    ).then(response => response.json())
  }
}
