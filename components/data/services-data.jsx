import image1 from "../../public/assets/img/service/Industrial Trading.jpg";
import image2 from "../../public/assets/img/service/industrial Contracting.jpg";
import image3 from "../../public/assets/img/service/Logistics Services.jpg";
import image4 from "../../public/assets/img/service/ICT Services.jpg";
import image5 from "../../public/assets/img/service/Security-Defence-Services.jpg";
import image6 from "../../public/assets/img/service/Offshore-Services.jpg";

const servicesData = [
    {
        id: 'industrial-trading',
        icon: <i className="flaticon-corporate"></i>,
        title: 'Industrial Trading',
        description: 'We conduct a thorough analysis of your existing business model',
        number: '1',
        image: image1,
    },
    {
        id: 'industrial-contracting',
        icon: <i className="flaticon-consultant-services"></i>,
        title: 'Industrial Contracting',
        description: 'Construction, pipelines, fabrication, and civil works for energy projects',
        number: '2',
        image: image2,
    },
    {
        id: 'logistics-services',
        icon: <i className="flaticon-data-science"></i>,
        title: 'Logistics Services',
        description: 'Heavy equipment leasing, specialized transport, manpower, and maintenance support.',
        number: '3',
        image: image3,
    },
    {
        id: 'ict-services',
        icon: <i className="flaticon-analysis"></i>,
        title: 'ICT Services',
        description: 'AI, AR/VR, IoT, and digital solutions for industrial transformation.',
        number: '4',
        image: image4,
    },
    {
        id: 'security-defence',
        icon: <i className="flaticon-creative"></i>,
        title: 'Security & Defence',
        description: 'Infrastructure protection, intrusion detection, and advanced security technologies.',
        number: '5',
        image: image5,
    },
    {
        id: 'offshore-services',
        icon: <i className="flaticon-resource"></i>,
        title: 'Offshore Services',
        description: 'Turnkey port construction, maritime facilities, and coastal protection projects.',
        number: '6',
        image: image6,
    },
];

export default servicesData;