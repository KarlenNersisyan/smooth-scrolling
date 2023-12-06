import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function ScrollWrapper({ children }) {
	//! Refs
	const main = useRef();
	const smoother = useRef();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			smoother.current = ScrollSmoother.create({
				smooth: 2,
				smoothTouch: 0.2,
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
