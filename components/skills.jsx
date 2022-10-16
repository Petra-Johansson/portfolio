export default function Skills() {
  return (
    <>

<h2 className="text-2xl mt-20 text-blush font-bold">Skills gained from education</h2>
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="main-skills my-5">
        <h3 className="text-xl font-bold text-purple underline my-2">The primary things we have worked with</h3>

          <ul>
            <li>HTML</li>
            <li>CSS + Sass, Bootstrap, Tailwind</li>
            <li>Vanilla JavaScript</li>
            <li>NodeJS and Express</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Heroku</li>
            <li>Git and GitHub</li>
            <li>Working agile, mainly according to scrum</li>
          </ul>
        </div>
        <div className="main-skills my-5">
          <h3 className="text-xl font-bold text-purple underline my-2">Other techniques we have been using/working with</h3>
          <ul>
            <li>MySQL</li>
            <li>Docker</li>
            <li>Firebase</li>
            <li>Testing with Jest, Mocha and Chai</li>
            <li>GitHooks and Husky</li>
            <li>Markdown and Yaml</li>
            <li>Swagger</li>
            <li>Passport and OAuth 2.0</li>
            <li>GDPR and handling Cookies</li>
          </ul>
        </div>
      </div>
    </>
  );
}
