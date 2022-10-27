import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link className="block gap-3 mx-auto  group hover:no-underline focus:no-underline 2xl:grid lg:grid 2xl:grid-cols-12 lg:grid-cols-12" alt="">
                    <img src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png" alt="" className="object-cover w-full rounded sm:h-96 2xl:col-span-7 lg:col-span-5 sm:col-span-12 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 2xl:col-span-5 lg:col-span-7 sm:col-span-12">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Cross-Origin Resource Sharing (CORS)</h3>
                        <span className="text-xs dark:text-gray-400">Feb 14, 2022</span>
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-1 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
                    <Link rel="noopener noreferrer" href="#" className="w-full mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">why are you using firebase? What other options do you have to implement authentication?</h3>
                            <span className="text-xs dark:text-gray-400">January 2, 2022</span>
                            <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.There are many services which Firebase provides, Most useful of them are:Cloud Firestore.Cloud Functions. Authentication.Hosting. Cloud Storage.Google Analytics.Predictions. Cloud Messaging.</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" href="#" className="w-full mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ytimg.com/vi/M6iYyo25QZo/mqdefault.jpg" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does the private route work?</h3>
                            <span className="text-xs dark:text-gray-400">Dec 4, 2018</span>
                            <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                                The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
                        </div>
                    </Link>
                    <Link rel="noopener noreferrer" href="#" className="w-full rounded-md mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.tekkiwebsolutions.com/wp-content/uploads/Nodejs-Architecture.jpg" alt='' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is Node.js? The JavaScript runtime explained</h3>
                            <span className="text-xs dark:text-gray-400">june 23, 2022</span>
                            <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications.Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.</p>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Blog;