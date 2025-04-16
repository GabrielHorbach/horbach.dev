import { ExternalLink } from "lucide-react";
import { t } from "@/constants/translations";

export function ProjectsSection() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      title: t("project1.title"),
      description: t("project1.description"),
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      title: t("project2.title"),
      description: t("project2.description"),
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      title: t("project3.title"),
      description: t("project3.description"),
      tags: ["Vue.js", "D3.js", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-gray-600">{t("projects.subtitle")}</p>
          <div className="w-20 h-1 bg-horbach-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-horbach-900/30 hover:bg-horbach-900/10 transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-horbach-50 text-horbach-800 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-horbach-700 hover:text-horbach-800 font-medium"
                >
                  {t("project.view")}
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
