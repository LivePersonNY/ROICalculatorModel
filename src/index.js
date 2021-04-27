import $ from 'jquery';
import calculate from 'basic-calculator-js';
/*
	Publicly accessible
*/

var config = {
	inputs: {
		fields: [],
		event: 'change',
		eventField: {},
	},
	constants: {},
	debug: false,
};

export function init(options) {
	config = $.extend(true, config, options);
	linkView();
	debug.info("Init succeeded.");
	
	debug.info("Calculator loaded", calculate.add(5, 5));
}

const debug = {
	info: function(message, data) {
		if (!config.debug) return false;
		window.console.info(message, data || null);
	}
}

function linkView() {
	config.inputs.fields.forEach(function(field) {
		$('[data-roi="' + field + '"]').on(config.inputs.eventField[field] || config.inputs.event, function(e) {
			debug.info("Field changed: ", {
				field: field,
				value: $(this).val()
			});
		});
	});
}



