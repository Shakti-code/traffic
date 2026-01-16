const trafficData = {
    area1: { status: "Low", vehicles: 120, speed: 45, flow: [20, 30, 40, 30] },
    area2: { status: "High", vehicles: 350, speed: 20, flow: [60, 80, 100, 90] },
    area3: { status: "Medium", vehicles: 220, speed: 35, flow: [40, 50, 60, 55] },
    area4: { status: "High", vehicles: 300, speed: 25, flow: [70, 90, 85, 95] }
};

const ctx = document.getElementById("trafficChart").getContext("2d");

let chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["6 AM", "9 AM", "12 PM", "6 PM"],
        datasets: [{
            label: "Traffic Flow",
            data: [20, 30, 40, 30],
            fill: false
        }]
    }
});

function updateTraffic() {
    const area = document.getElementById("areaSelect").value;
    const data = trafficData[area];

    document.getElementById("trafficStatus").innerText = data.status;
    document.getElementById("vehicles").innerText = data.vehicles;
    document.getElementById("speed").innerText = data.speed + " km/h";

    const statusCard = document.getElementById("statusCard");
    statusCard.className = "card";

    if (data.status === "Low") statusCard.classList.add("low");
    else if (data.status === "Medium") statusCard.classList.add("medium");
    else statusCard.classList.add("high");

    chart.data.datasets[0].data = data.flow;
    chart.update();
}