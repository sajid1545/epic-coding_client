import React from 'react';

const Blogs = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
			<div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
				{/* question - 1  */}
				<div className="overflow-hidden transition-shadow duration-300 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded border-2 p-5 rounded-tr-3xl rounded-bl-3xl">
					<div>
						<img
							src="https://www.softaox.info/wp-content/uploads/2019/04/Cross-origin-resource-sharing-CORS-1-3.jpg"
							className="object-cover w-full h-64 rounded"
							alt=""
						/>
					</div>
					<div className="py-5">
						<div className="inline-block mb-3  transition-colors duration-200 hover:text-deep-purple-accent-700">
							<p className="text-2xl font-bold leading-5">What is cors?</p>
						</div>
						<p className="mb-4 ">
							Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a
							server to indicate any origins (domain, scheme, or port) other than its own from which
							a browser should permit loading resources. CORS also relies on a mechanism by which
							browsers make a "preflight" request to the server hosting the cross-origin resource,
							in order to check that the server will permit the actual request. In that preflight,
							the browser sends headers that indicate the HTTP method and headers that will be used
							in the actual request.
						</p>
					</div>
				</div>

				{/* question - 2  */}

				<div className="overflow-hidden transition-shadow duration-300 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded border-2 p-5 rounded-tr-3xl rounded-bl-3xl">
					<div>
						<img
							src="https://images.ctfassets.net/vv1yxl437u7d/6Qo4cU0nfefrAdxp8lgZqy/12f4b375281484cd5d075d116b2455b2/Blog_Feature_1200x630_Firebase_alternatives_and_competitors_01.png"
							className="object-cover w-full h-64 rounded"
							alt=""
						/>
					</div>
					<div className="py-5">
						<div className="inline-block mb-3  transition-colors duration-200 hover:text-deep-purple-accent-700">
							<p className="text-2xl font-bold">
								Why are you using firebase? What other options do you have to implement
								authentication?
							</p>
						</div>
						<p className="mb-4 ">
							Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI
							libraries to authenticate users to your app. It supports authentication using
							passwords, phone numbers, popular federated identity providers like Google, Facebook
							and Twitter, and more.Firebase Authentication aims to make building secure
							authentication systems easy, while improving the sign-in and onboarding experience for
							end users.Auth0 is the go-to user authentication platform and a Firebase alternative
							for good reasons.Supabase calls itself an open-source Firebase alternative.Okta is
							again a flagbearer of password-less security. However, you can ask for the strongest
							passwords with Okta as well.
						</p>
					</div>
				</div>

				{/* question - 3  */}

				<div className="overflow-hidden transition-shadow duration-300 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded border-2 p-5 rounded-tr-3xl rounded-bl-3xl">
					<div>
						<img
							src="https://miro.medium.com/max/1400/1*ZgWgOXWVtGFCNpoRSjOdOg.jpeg"
							className="object-cover w-full h-64 rounded"
							alt=""
						/>
					</div>
					<div className="py-5">
						<div className="inline-block mb-3  transition-colors duration-200 hover:text-deep-purple-accent-700">
							<p className="text-2xl font-bold leading-5">How does the private route work?</p>
						</div>
						<p className="mb-4 ">
							The private route component is similar to the public route, the only change is that
							redirect URL and authenticate condition. If the user is not authenticated he will be
							redirected to the login page and the user can only access the authenticated routes If
							he is authenticated (Logged in).
						</p>
					</div>
				</div>

				{/* question - 4  */}

				<div className="overflow-hidden transition-shadow duration-300 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded border-2 p-5 rounded-tr-3xl rounded-bl-3xl">
					<div>
						<img
							src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png"
							className="object-cover w-full h-64 rounded"
							alt=""
						/>
					</div>
					<div className="py-5">
						<div className="inline-block mb-3  transition-colors duration-200 hover:text-deep-purple-accent-700">
							<p className="text-2xl font-bold leading-5"> What is Node? How does Node work?</p>
						</div>
						<p className="mb-4 ">
							For web servers, scalability, latency, and throughput are important performance
							metrics. It is challenging to scale up and out while keeping the latency low and the
							throughput high. Node.js is a JavaScript runtime environment that uses a
							"non-blocking" strategy to serve requests in order to achieve low latency and high
							throughput. In other words, Node.js doesn't waste any resources or time waiting for
							the results of I/O requests.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
