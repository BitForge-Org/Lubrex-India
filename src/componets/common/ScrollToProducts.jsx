import React, { useRef, useEffect, useState } from "react";

const ScrollToProducts = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));

export default ScrollToProducts;
