import React from 'react'

function Logo({ size = 50, color = '#93E9BE'  }) {
  return (
    <div style={{ height: `${size}px`, width: `${size}px` }}>
      <svg version="1.1" id="svg8" x="0px" y="0px" viewBox="0 0 1121.6 1121.6">
        <path className="st0" d="M560.8,0L560.8,0C251.1,0,0,251.1,0,560.8v0c0,309.7,251.1,560.8,560.8,560.8h0  c309.7,0,560.8-251.1,560.8-560.8v0C1121.6,251.1,870.5,0,560.8,0z M810.8,824c0-0.4,0-0.4,0-0.8c8.8-16.8,13.6-36,13.6-56.4  c0-68.4-55.6-124-124-124c-68.4,0-124,55.6-124,124c0,64.8,49.6,118,113.2,123.6c-135.2,48-374.4,20-502.8-52.4  c19.6-36.8,47.2-108,58.4-149.2c14-92.4,39.6-269.6,92-314.4c88.8-116.4,309.2-128.4,394-2c5.2-0.4,29.2-78.4,38.4-122.4  c11.6-56.4,14-66.4,18-66.8c1.6,0,17.2,8.4,34.8,18.8c27.2,16.4,44.8,28.4,64.8,42.8C856,277.6,776.4,381.2,772,398.8  c0,1.2,7.6,3.6,16.8,5.6c90,15.2,142.8,116,139.6,206.8C933.2,685.6,865.2,794.8,810.8,824z" style={{ fill: color }}
        />
      </svg>
    </div>
  )


}

export default Logo