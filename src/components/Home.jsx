import React from 'react'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://thumbs.dreamstime.com/b/online-library-media-books-archive-concept-tiny-people-characters-huge-computer-screen-bookshelves-reading-e-study-179077729.jpg" class="d-block mx-5" alt="Books" width="1050px" height="550px"/>  
                    </div>
                        <div class="carousel-item">
                           <img src="https://img.freepik.com/free-vector/group-people-reading-borrowing-books_53876-43122.jpg?w=2000" class="d-block ms-auto" alt="Books" width="1100px" height="550px"/>
                            
                        </div>

                </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                    </div>
                    )
}

                    export default Home
