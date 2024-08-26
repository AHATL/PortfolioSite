document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.name} - Alex Hunt Portfolio`;
        document.getElementById('project-title').textContent = project.name;
        document.getElementById('project-subtitle').textContent = project.subtitle;
        document.getElementById('project-description').textContent = project.fullDescription;
        document.getElementById('project-thumbnail').src = project.thumbnailUrl;
        document.getElementById('project-thumbnail').alt = project.name;
        
        const skillsContainer = document.getElementById('project-skills');
        project.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.textContent = skill;
            skillsContainer.appendChild(skillItem);
        });

        const galleryContainer = document.getElementById('project-gallery');
        project.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = project.name;
            img.addEventListener('click', function() {
                window.open(imageSrc, '_blank');
            });
            galleryContainer.appendChild(img);
        });
    } else {
        document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
    }
});