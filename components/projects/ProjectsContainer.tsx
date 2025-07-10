import { fetchAllProjects } from '@/app/utils/actions';

async function ProductsContainer() {
    const projects = await fetchAllProjects({search: ''});
    console.log(projects);
    
    return (
        <>
            {/* HEADER */}
            <section>
            projects
            </section>
            {/* PRODUCTS */}
            <div>
                {
                    projects.map((project) => {
                        return (
                            <div key={project.id}>
                                {project.url}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
export default ProductsContainer;