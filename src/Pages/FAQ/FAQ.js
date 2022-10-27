import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Who should take an Online Course?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
                            Advance your skill-set or begin a career change.
                            Take the next step in your formal education.
                            Ease the transition before entering a full-time academic program.
                            Enjoy learning a new topic.
                            Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How do I select a course?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
                            Personal Course Advisement
                            Still not sure what course is right for you? Feel free to contact us at online@sothebysinstitute.com with some information on your background and what you hope to learn. We can then provide some personalized course advisement. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> I am a high school student, can I join?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;