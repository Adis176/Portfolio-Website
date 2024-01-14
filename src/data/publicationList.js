// export let publicationList = [
//     {
//         ind: 1,
//         src: './Images/publications/handwritten-recognition.png',
//         desc: ['Handwritten digit recognition aims to digitalize a very basic yet important aspect. Here, we construct various recognition models, along with different optimizers on MNIST digit dataset.',
//             'We employ various models over the generally preferred CNN as they require large amounts of data.',
//             'The work emphasizes detailed comparisons, leveraging various optimizers (SGD, momentum, Adagrad, NAG, RMSProp etc.)	',
//             'Best accuracy of 98.55% is achieved on implementing an ANN model with Adagrad optimizer.'],
//         title: 'Improved Handwritten Digit Recognition Using Artificial Neural Networks'
//     },
//     {
//         ind: 2,
//         src: './Images/publications/idms.png',
//         desc: ['Designed an integrated Database management system, which seamlessly links police, medical and fire-brigade departments.',
//         'Departments are notified based on direness and type of situation.',
//         'Developed MYSQL Queries in order to register personnel with a common ID throughout all departments.', 
//         'Crafted advanced relational & ER Diagrams to represent the model flow.'],
//         title: 'Integrated Database Management (IDMS) For Emergency Services'
//     },
//     {
//         ind: 3,
//         src: './Images/publications/Heart.png',
//         desc: ['One third of deaths are caused due to cardio-vascular diseases. We aim to predict them in order to prevent them.', 
//         'Relevant factors have been taken into consideration from UCI dataset.',
//         '5 different models namely logistic regression, support vector machine, MLP classifier with principal component analysis, deep neural network & bootstrap aggregation using random forest have been employed.',
//         'Bootstrap aggregation model gets the highest accuracy of 97.674% with a 90:10 data split, as it has the advantage of multiple model predictions.',
//         'Hyperparameter tuning was done with random search for model optimization.'],
//         title: 'Cardiovascular Disease Prediction using Various Machine Learning Algorithms'
//     },
//     {
//         ind: 4,
//         src: './Images/publications/CO22.png',
//         desc: ['Increased CO2 emissions is a very serious problem, thus we develop a model to predict these emissions.',
//                'Traditional models like Linear regression, random forest cannot be used for time-series analysis, hence LSTM model has been employed.',
//                 'Careful inclusion of 19 features and data pre-processing, along with hyperparameter tuning ensures a RMSE value of 0.01788. ',],
//         title: 'Forecasting of CO2 Emissions in India: Time Series and Non-time series analysis',
//     },
// ];


export let publicationList = [
    {
        ind: 1,
        src: './Images/publications/handwritten-recognition.png',
        desc: ['Handwritten digit recognition aims to digitalize a very basic yet important aspect. ',
            'The work emphasizes detailed comparisons, leveraging various optimizers (SGD, momentum, Adagrad, NAG, RMSProp etc.)	',
            'Best accuracy of 98.55% is achieved on implementing an ANN model with Adagrad optimizer.'],
        title: 'Improved Handwritten Digit Recognition Using Artificial Neural Networks',
        link: 'https://www.researchgate.net/publication/370330352_Enhanced_handwritten_digit_recognition_using_optimally_selected_optimizer_for_an_ANN'
    },
    {
        ind: 2,
        src: './Images/publications/idms2.png',
        desc: ['Designed an integrated Database management system, which seamlessly links police, medical and fire-brigade departments. ',
        'Developed MYSQL Queries in order to register personnel with a common ID throughout all departments. ', 
        'Crafted advanced relational & ER Diagrams to represent the model flow.'],
        title: 'Integrated Database Management (IDMS) For Emergency Services',
        link: 'https://ieeexplore.ieee.org/document/9670946'
    },
    {
        ind: 3,
        src: './Images/publications/Heart.png',
        desc: ['One third of deaths are caused due to cardio-vascular diseases. We aim to predict them in order to prevent them. ', 
        '5 different Models namely logistic regression, support vector machine, MLP classifier with principal component analysis, deep neural network & Bootstrap Aggregation using random forest have been employed.',
        'Bootstrap aggregation model gets the highest accuracy of 97.674% with a 90:10 data split, as it has the advantage of multiple model predictions.',
        'Hyperparameter tuning was done with random search for model optimization.'],
        title: 'Cardiovascular Disease Prediction using Various Machine Learning Algorithms',
        link: 'https://www.researchgate.net/publication/364583692_Cardiovascular_Disease_Prediction_using_Various_Machine_Learning_Algorithms'
    },
    {
        ind: 4,
        src: './Images/publications/CO22.png',
        desc: ['Increased CO2 emissions is a very serious problem, thus we develop a model to predict these emissions.',
               'Traditional models like Linear regression, random forest cannot be used for time-series analysis, hence LSTM model has been employed.',
                'Careful inclusion of 19 features and data pre-processing, along with hyperparameter tuning ensures a RMSE value of 0.01788. ',],
        title: 'Forecasting of CO2 Emissions in India: Time Series and Non-time series analysis',
        link: ''
    },
];