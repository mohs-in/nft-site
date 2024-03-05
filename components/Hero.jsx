import React from 'react'
// import { getImageUrl } from './imgs.js';

function Hero(props) {
    return(
        <main>
            <section class="sectionOne" >
                <div class="container">
                    <h2>Meta-Pigeon Sneaker NFT $33,000</h2>
                    <img src="/sneakersPurple.png" className='main-img' alt="Purple and silver sneakers" />
                    <p><strong>At $33k, this NFT sneaker is super good value!</strong></p>
                    <p>If you've got lots of money and you're a bit daft, NFTs are a
                        great way to pay for something that doesn't have any intrinsic
                        value or even exist. Tech fashionistas are jumping on the NFT
                        bandwagon and spending eye-watering sums of money on crypto images.
                        Our advice: spend the weekend <a href="google.com" id="p-link">crafting an NFT</a> and by
                        this time next week, you'll be a millionaire.
                    </p>
                    <a href="google.com" class="btn btn-dark">Buy NFT</a>
                    <a href="google.com" class="btn btn-mid">More info</a>
                </div>
            </section>

            <section class="sectionTwo">
                <h2 class="container">For the true Crypto-connoisseur</h2>
                <div class="img-container">
                    <img class="feature-img" src="/cryptoPunk.jpg" alt="punk with blach hair and red and blue glasses" />
                    <img class="feature-img" src="/bag.svg" alt="Seven items from a game listed in white on a black background" />
                </div>
                <div class="container">
                    <p>Is $33k for sneakers too basic for you? No problem! This CryptoPunk
                        (left) is a steal at $6.6 million! Which makes Bag #748 (right) a
                        total bargain at $1.4 million. And by the way, that's not a VS
                        Code screenshot we included by mistake. The eight lines of white text
                        on a black background is the actual NFT we're selling.</p>
                    <a href="google.com" class="btn btn-mid">About Us</a>
                    <a href="google.com" class="btn btn-light">Contact</a>
                    <p>Still not convinced? To be honest, nor are we. That's why we're selling
                        them, not buying them.</p>
                </div>
            </section>
        </main>
    )
}

export default Hero







