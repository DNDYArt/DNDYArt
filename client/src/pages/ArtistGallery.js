import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import picture from "../components/images/abstract-2.jpg";
import picture2 from "../components/images/abstract-1.jpg";
import picture3 from "../components/images/abstract-3.jpg";
import picture4 from "../components/images/abstract-4.jpg";
import picture5 from "../components/images/strawberry.jpg";
import picture6 from "../components/images/mountain-bw.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ArtistGallery = () => {
	useEffect(() => {
		AOS.init({});

		document
			.querySelectorAll("img")
			.forEach((img) =>
				img.addEventListener("load", () => AOS.refresh())
			);
	}, []);

	return (
		<>
			<div className="fullGallery">
				<div className="singleArtistContainer">
					<div className="galleryFeatureContainer">
						<img src={picture} alt="abstract painting" />
					</div>
					<div className="artistInfo">
						<h1>Jason Smith</h1>
						<h2>
							Contained Splash <span>c.('21)</span>
						</h2>
						<p className="artistAboutUnderline">About the piece:</p>
						<p className="artistAboutInfo">
							Inspired by a psychedelic walk on the beach, this
							piece portrays the coexistence of fluidity and
							geometric structure. Many people assume the two
							don't mix, but Jason Smith would disagree.
						</p>
						<p className="artistGalleryPrice">
							The current bid is: 15,000
						</p>
						<div className="socials">
							<a href="https://twitter.com/" target="_blank">
								<FontAwesomeIcon
									icon={faTwitter}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a href="https://www.facebook.com/" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				<div className="singleArtistContainer">
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="artistInfo"
					>
						<h1>Jason Smith</h1>
						<h2>
							Contained Splash <span>c.('21)</span>
						</h2>
						<p className="artistAboutUnderline">About the piece:</p>
						<p className="artistAboutInfo">
							Inspired by a psychedelic walk on the beach, this
							piece portrays the coexistence of fluidity and
							geometric structure. Many people assume the two
							don't mix, but Jason Smith would disagree.
						</p>
						<p className="artistGalleryPrice">
							The current bid is: SOLD
						</p>
						<div className="socials">
							<a href="https://twitter.com/" target="_blank">
								<FontAwesomeIcon
									icon={faTwitter}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a href="https://www.facebook.com/" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="galleryFeatureContainer"
					>
						<img src={picture2} alt="abstract painting" />
					</div>
				</div>
				<div className="singleArtistContainer">
					<div
						data-aos="flip-left"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="galleryFeatureContainer"
					>
						<img src={picture3} alt="abstract painting" />
					</div>
					<div
						data-aos="fade-down"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="artistInfo"
					>
						<h1>Jason Smith</h1>
						<h2>
							Contained Splash <span>c.('21)</span>
						</h2>
						<p className="artistAboutUnderline">About the piece:</p>
						<p className="artistAboutInfo">
							Inspired by a psychedelic walk on the beach, this
							piece portrays the coexistence of fluidity and
							geometric structure. Many people assume the two
							don't mix, but Jason Smith would disagree.
						</p>
						<p className="artistGalleryPrice">
							The current bid is: SOLD
						</p>
						<div className="socials">
							<a href="https://twitter.com/" target="_blank">
								<FontAwesomeIcon
									icon={faTwitter}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a href="https://www.facebook.com/" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				<div className="singleArtistContainer">
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="artistInfo"
					>
						<h1>Jason Smith</h1>
						<h2>
							Contained Splash <span>c.('21)</span>
						</h2>
						<p className="artistAboutUnderline">About the piece:</p>
						<p className="artistAboutInfo">
							Inspired by a psychedelic walk on the beach, this
							piece portrays the coexistence of fluidity and
							geometric structure. Many people assume the two
							don't mix, but Jason Smith would disagree.
						</p>
						<p className="artistGalleryPrice">
							The current bid is: SOLD
						</p>
						<div className="socials">
							<a href="https://twitter.com/" target="_blank">
								<FontAwesomeIcon
									icon={faTwitter}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a href="https://www.facebook.com/" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="galleryFeatureContainer"
					>
						<img src={picture4} alt="abstract painting" />
					</div>
				</div>
				<div className="singleArtistContainer">
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="galleryFeatureContainer"
					>
						<img src={picture5} alt="strawberry" />
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="artistInfo"
					>
						<h1>Jason Smith</h1>
						<h2>
							Contained Splash <span>c.('21)</span>
						</h2>
						<p className="artistAboutUnderline">About the piece:</p>
						<p className="artistAboutInfo">
							Inspired by a psychedelic walk on the beach, this
							piece portrays the coexistence of fluidity and
							geometric structure. Many people assume the two
							don't mix, but Jason Smith would disagree.
						</p>
						<p className="artistGalleryPrice">
							The current bid is: SOLD
						</p>
						<div className="socials">
							<a href="https://twitter.com/" target="_blank">
								<FontAwesomeIcon
									icon={faTwitter}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a href="https://www.facebook.com/" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
				</div>
				<div className="singleArtistContainer">
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="artistInfo"
					>
						<h1>Jason Smith</h1>
						<h2>
							Contained Splash <span>c.('21)</span>
						</h2>
						<p className="artistAboutUnderline">About the piece:</p>
						<p className="artistAboutInfo">
							Inspired by a psychedelic walk on the beach, this
							piece portrays the coexistence of fluidity and
							geometric structure. Many people assume the two
							don't mix, but Jason Smith would disagree.
						</p>
						<p className="artistGalleryPrice">
							The current bid is: SOLD
						</p>
						<div className="socials">
							<a href="https://twitter.com/" target="_blank">
								<FontAwesomeIcon
									icon={faTwitter}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
							<a href="https://www.facebook.com/" target="_blank">
								<FontAwesomeIcon
									icon={faFacebook}
									className="spaceIcon"
								></FontAwesomeIcon>
							</a>
						</div>
					</div>
					<div
						data-aos="flip-right"
						data-aos-duration="1000"
						data-aos-delay="50"
						className="galleryFeatureContainer"
					>
						<img src={picture6} alt="mountain black/white" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ArtistGallery;