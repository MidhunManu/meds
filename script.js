$(document).ready(function() {
	function fill_med_data(med_type) {
		let dat_url = "";
		switch (med_type) {
			case "allopathic":
				dat_url = "./allopathic.dat";
				break;
			case "homeo":
				dat_url = "./homeo.dat";
				break;
			case "ayervedic":
				dat_url = "./ayurveda.dat";
				break;
			case "generic":
				dat_url = "./generic.dat";
			case "home":
				dat_url = "./home.dat";
		}

		$.ajax({
			url: dat_url,
			type: "get",
			success: function(response) {
				let data = response.split("\n");
				data.pop();
				$("tbody").empty();
				data.forEach((i) => {
					const row = i.split(",");
					const name = row[0];
					const desc = row[1];
					const price = row[2];
					const link = row[3];

					$("tbody").append(`<tr><td>${name}</td><td>${desc}</td><td>${price}</td><td><a target="_blank" href='${link}'>link</a></td></tr>`);
				});
			}
		});
	}
	$("#al").click(function() {
		fill_med_data("allopathic");
	});

	$("#homeo").click(function() {
		fill_med_data("homeo");
	});

	$("#ayervedic").click(function() {
		fill_med_data("ayervedic");
	});

	$("#generic").click(function() {
		fill_med_data("generic");
	});

	$("#home").click(function() {
		fill_med_data("home");
	});

	fill_med_data("home");
});

