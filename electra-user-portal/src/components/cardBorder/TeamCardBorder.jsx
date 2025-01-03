import React from "react";
import styled from "styled-components";

const TeamCardBorder = ({children}) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
 ${'' /* width: 190px; */}
 ${'' /* height: 254px; */}
 --border-radius: 15px;
 --border-width: 2px;
 appearance: none;
 position: relative;
 padding: 1em 1em;
 border: 0;
 background: rgb(5, 5, 22);
 font-size: 18px;
 font-weight: 500;
 color: #fff;
 z-index: 0;
 border-radius: 15px;
}

.card::after {
 --m-i: linear-gradient(#000, #000);
 --m-o: content-box, padding-box;
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 padding: var(--border-width);
 border-radius: var(--border-radius);
 background-image: conic-gradient(
		#488cfb,
		#29dbbc,
		#ddf505,
		#ff9f0e,
		#e440bb,
		#655adc,
		#488cfb
	);
 -webkit-mask-image: var(--m-i), var(--m-i);
 mask-image: var(--m-i), var(--m-i);
 -webkit-mask-origin: var(--m-o);
 mask-origin: var(--m-o);
 -webkit-mask-clip: var(--m-o);
 mask-composite: exclude;
 -webkit-mask-composite: destination-out;
 filter: hue-rotate(0);
 animation: rotate-hue linear 500ms infinite;
 animation-play-state: paused;
}

.card:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

.card,
.card::after {
 box-sizing: border-box;
}

.card:active {
 --border-width: 5px;
}
`;

export default TeamCardBorder;
