# ROI Calculator Model

This package will provide an ROI calculator model for use on a dynamic web view.

## Basic usage

There are six inputs required.

```html
<input type="text" data-roi="sales-traffic" value="50000000" />
<input type="text" data-roi="sales-conv-rate" value=".5" />
<input type="text" data-roi="sales-avg-order" value="100" />
    
<input type="text" data-roi="care-call-volume" value="10000000" />
<input type="text" data-roi="care-cost-per-call" value="6" />
<input type="text" data-roi="care-contact-resolution" value="70" />
```

Additionally, these outputs are required. The HTML tag can be whatever you want, you just need the `data-roi` property.

```html
<h2 data-roi="sales-increase-year1"></h2>
<h2 data-roi="sales-avg-order-year1"></h2>
<h2 data-roi="care-fcr-year1"></h2>
<h2 data-roi="care-ai-scale-year1"></h2>
<h2 data-roi="care-efficiency-year1"></h2>
    
<h2 data-roi="total-savings-year1"></h2>
<h2 data-roi="total-growth-year1"></h2>
<h2 data-roi="total-total-benefit-year1"></h2>
```