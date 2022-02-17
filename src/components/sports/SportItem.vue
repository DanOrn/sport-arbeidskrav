<template>
    <article>
        <img :src="getAllImage()" />
        <h3>{{ title }}</h3>
        <p> {{ description }}</p>
    </article>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        description: String
    },

    setup(props) {
        const getAllImage = () => {
            let image;
            /* I am using try/catch because if the given image could not be found, than there would be another 
            image that is used to inform the user */
            try {
                image = require (`@/assets/${props.image}`);
            } catch {
                image = require (`@/assets/logo.png`);
            }
            return image;
        };

        return { getAllImage };
    },
};
</script>