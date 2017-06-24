function generateResources(quantity, type) {
  var resources = [];
  for(let i = 0; i < quantity; i++) {
    resources.push({
      id: i,
      name: `${type} ${i} @ ${Date.now()}`
    });
  }
  return resources;
}

function generateDeliverers() {
  return generateResources(100, "Deliverer");
}

function generateJobs() {
  return generateResources(1000, "Job");
}

var app = new Vue({
  el: "#app",
  data: {
    jobs: generateJobs(),
    deliverers: generateDeliverers()
  }
});

setInterval(() => {
  app.jobs = generateJobs();
  app.deliverers = generateDeliverers();
}, 1000)

Vue.component('deliverers-list', {
  props: ['deliverers'],
  template: '<div class="p-2"><div v-for="deliverer in deliverers">{{deliverer.name}}</div></div>'
});

Vue.component('jobs-list', {
  props: ['jobs'],
  template: '<div class="p-2"><div v-for="job in jobs">{{job.name}}</div></div>'
});
