import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function ScrollWrapper({ children }) {
	//! Refs
	const main = useRef();
	const smoother = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			smoother.current = ScrollSmoother.create({
				smooth: 3.3,
				smoothTouch: 0.3,
				effects: true,
			});
		}, main);
		return () => ctx.revert();
	}, []);

	return (
		<>
			<div
				ref={main}
				id='smooth-wrapper'>
				<div id='smooth-content'>{children}</div>
			</div>
		</>
	);
}

export default ScrollWrapper;
