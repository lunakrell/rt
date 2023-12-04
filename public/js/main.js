$(document).ready(function () {
	var urlParams = new URLSearchParams(window.location.search);

	if (urlParams.has("email") === true) {
		$("#emailAddr").val(urlParams.get("email"));
		$("#emailAddr").parent().addClass("cb-active");
	} else {
		console.log("An error has occurred while trying to parse URL params...");
	}

	$("a").on("click", function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$(".cb-input").on("focus", function () {
		$(this).parent().addClass("cb-focused");
	});

	$(".cb-input").on("blur", function () {
		$(this).parent().removeClass("cb-focused");

		if ($(this).val().trim() != "") {
			$(this).parent().addClass("cb-active");
		} else {
			$(this).parent().removeClass("cb-active");
		}
	});

	$(".toggle-password").on("click", function () {
		if ($(this).text() == "Show") {
			$(this).text("Hide");
			$(this).siblings(".cb-input").attr("type", "text");
		} else {
			$(this).text("Show");
			$(this).siblings(".cb-input").attr("type", "password");
		}
	});

	$(".cb-input").on("keyup blur", function () {
		if ($(this).val().trim() == "") {
			$(this).parent().addClass("cb-error");
		} else {
			$(this).parent().removeClass("cb-error");
		}
	});

	$("#submitBtn").on("click", function (e) {
		$(".cb-input").each(function () {
			if ($(this).val().trim() == "") {
				$(this).parent().addClass("cb-error");
				e.preventDefault();
			}
		});
	});
});
