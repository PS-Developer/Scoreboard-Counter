const container = document.querySelector(`#container`);
const homeScore = document.querySelector(`#homeScore`);
const guestScore = document.querySelector(`#guestScore`);

homeCount = 0
guestCount = 0

container.addEventListener('click', e => {
  let count = e.target
  updateScore(count)
})

function updateScore (count) {
// Home Team
  if (count.classList.contains(`home`)) {
homeCount += Number(count.dataset.increment)
homeScore.textContent = homeCount
}
// Guest Team
if (count.classList.contains(`guest`)) {
  guestCount += Number(count.dataset.increment)
  guestScore.textContent = guestCount
  }
}
