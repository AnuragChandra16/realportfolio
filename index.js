<script>
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.heading a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                // Remove the "active" class from all links
                document.querySelectorAll('.heading a').forEach(link => {
                    link.classList.remove('skills');
                });

                // Add the "active" class to the clicked link
                this.classList.add('skills');

                const targetSectionClass = this.getAttribute('href').substring(1);
                const targetSection = document.querySelector('.' + targetSectionClass);
                
                if (targetSection) {
                    // Change background color for 2 milliseconds
                    targetSection.style.backgroundColor = 'white';
                    setTimeout(() => {
                        targetSection.style.backgroundColor = ''; // Reset to default color
                    }, 2);

                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        })
    })
</script>
