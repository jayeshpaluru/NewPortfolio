'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const { data } = await axios.get('https://api.github.com/users/jayeshpaluru/repos');
      const reposWithLanguages = await Promise.all(data.map(async (repo) => {
        const { data: languages } = await axios.get(repo.languages_url);
        return { ...repo, languages: Object.keys(languages) };
      }));
      setRepos(reposWithLanguages);
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="bg-slate-950 rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto">
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold">
        {'//Projects'}
      </h2>
      <div className="flex flex-col items-start justify-center h-full">
        {repos.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo) => (
          <a href={repo.html_url} key={repo.id} className="sm:px-12 py-5">
            <h2 style={{ textDecoration: 'underline' }}>{repo.name}</h2>
            <p>{repo.description}</p>
            <p>Stars: {repo.stargazers_count}</p>
            {repo.languages.length > 0 && (
              <div>
                Languages: 
                {repo.languages.join(', ')}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}