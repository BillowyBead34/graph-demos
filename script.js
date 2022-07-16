$(function () {
  $('#ms')
    .change(function () {
      console.log($(this).val());
    })
    .multipleSelect({
      width: '100%',
      filter: true,
    });
});

const info = {
  'LUIS,MANUEL,OJEDA,BONILLA': [
    {
      mod_forum: 1096,
      mod_page: 578,
      mod_folder: 685,
      mod_resource: 1659,
      mod_url: 1225,
      mod_assign: 2116,
    },
    27,
    1948,
  ],
  'ROBERTO,ANTONIO,NAVARRO,CHAN': [
    {
      mod_url: 968,
      mod_forum: 849,
      mod_page: 1239,
      mod_folder: 427,
      mod_resource: 1252,
      mod_assign: 1018,
    },
    56,
    2226,
  ],
  'MONICA,NAOMI,BRITO,ORTIZ': [
    {
      mod_url: 882,
      mod_forum: 1200,
      mod_page: 2492,
      mod_assign: 2456,
      mod_folder: 506,
      mod_resource: 15562,
    },
    57,
    5535,
  ],
  'DANIEL,ROSALES,CONTRERAS': [
    {
      mod_url: 2076,
      mod_page: 1250,
      mod_forum: 1159,
      mod_assign: 1862,
      mod_wiki: 9,
      mod_resource: 1793,
      mod_folder: 4073,
    },
    23,
    2663,
  ],
  'DANIEL,ALEJANDRO,ALVAREZ,RAMIREZ': [
    {
      mod_forum: 1308,
      mod_page: 732,
      mod_url: 779,
      mod_resource: 15120,
      mod_wiki: 10,
      mod_assign: 1359,
      mod_folder: 901,
    },
    112,
    5236,
  ],
  'JOSE,EMMANUEL,PECH,AKE': [
    {
      mod_page: 1191,
      mod_forum: 1667,
      mod_assign: 1868,
      mod_folder: 942,
      mod_url: 454,
      mod_resource: 4218,
    },
    26,
    2240,
  ],
  'ROSAURA,IRIZELL,GARCILAZO,CUEVAS': [
    {
      mod_forum: 1263,
      mod_url: 611,
      mod_page: 1205,
      mod_assign: 1685,
      mod_folder: 925,
      mod_resource: 2789,
    },
    38,
    3447,
  ],
  'IOWA,ALEJANDRO,OLIVERA,PEREZ': [
    {
      mod_url: 963,
      mod_forum: 1624,
      mod_resource: 1427,
      mod_page: 2110,
      mod_folder: 1594,
      mod_assign: 942,
      mod_wiki: 21,
    },
    58,
    3506,
  ],
  'ELIEZER,FERNANDO,COUOH,BALAM': [
    {
      mod_forum: 1329,
      mod_page: 1615,
      mod_url: 634,
      mod_resource: 1599,
      mod_assign: 1631,
      mod_folder: 1135,
      mod_wiki: 3,
    },
    68,
    3255,
  ],
  'JOSE,ANTONIO,BARRERA,MORALES': [
    {
      mod_url: 949,
      mod_page: 1008,
      mod_forum: 762,
      mod_resource: 1455,
      mod_assign: 633,
      mod_folder: 679,
    },
    38,
    1895,
  ],
  'IVAN,ALBERTO,AGUILAR,CASTILLO': [
    {
      mod_forum: 836,
      mod_page: 1304,
      mod_folder: 1131,
      mod_resource: 2723,
      mod_assign: 2148,
      mod_url: 466,
    },
    67,
    2581,
  ],
  'ISAAC,ELIU,CANCHE,ALONZO': [
    {
      mod_resource: 13231,
      mod_forum: 533988,
    },
    2,
    13296,
  ],
  'FRANCISCO,JAVIER,QUIJANO,SUAREZ': [
    {
      mod_url: 826,
      mod_page: 899,
      mod_forum: 1717,
      mod_wiki: 967,
      mod_folder: 1003,
      mod_assign: 694,
      mod_resource: 29184,
    },
    50,
    2410,
  ],
  'MARCELO,TORRES,PARDO': [
    {
      mod_forum: 914,
      mod_page: 1280,
      mod_wiki: 17,
      mod_assign: 1077,
      mod_url: 1623,
      mod_folder: 630,
      mod_resource: 1664,
    },
    39,
    2514,
  ],
  'EMMANUEL,RIVERO,POOT': [
    {
      mod_forum: 31593,
      mod_assign: 31,
    },
    6,
    13308,
  ],
  'ALEJANDRO,CHUC,ARCIA': [
    {
      mod_url: 1026,
      mod_forum: 1527,
      mod_page: 2441,
      mod_resource: 1930,
      mod_folder: 1554,
      mod_assign: 2413,
      mod_wiki: 71,
    },
    48,
    3544,
  ],
  'ULISES,ALEXANDER,ANCONA,GRANIEL': [
    {
      mod_forum: 2006,
      mod_resource: 3993,
      mod_page: 1389,
      mod_folder: 2134,
      mod_url: 8630,
      mod_assign: 2112,
      mod_wiki: 9,
    },
    83,
    5018,
  ],
  'ANDRES,ANTONIO,PEREZ,ROMERO': [
    {
      mod_url: 535,
      mod_forum: 93294,
      mod_page: 1041,
      mod_resource: 1621,
      mod_assign: 1225,
      mod_folder: 1289,
    },
    20,
    2952,
  ],
  'HUMBERTO,MANUEL,PECH,HUCHIN': [
    {
      mod_url: 1460,
      mod_forum: 7160,
      mod_page: 1445,
      mod_assign: 790,
      mod_wiki: 29,
      mod_folder: 1314,
      mod_resource: 1174,
    },
    88,
    4210,
  ],
  'RODRIGO,PLAZA,VILLANUEVA': [
    {
      mod_resource: 360737,
    },
    1,
    360817,
  ],
  'SHEILA,RICALDE,PEREZ': [
    {
      mod_page: 514,
      mod_url: 221,
      mod_forum: 2292,
      mod_assign: 2663,
      mod_wiki: 12,
      mod_resource: 2121,
      mod_folder: 849,
    },
    64,
    3573,
  ],
  'WENDY,PAULINA,SOSA,LOPEZ': [
    {
      mod_url: 1295,
      mod_forum: 1869,
      mod_folder: 994,
      mod_page: 456,
      mod_resource: 1322,
      mod_assign: 1393,
      mod_wiki: 75,
    },
    71,
    3551,
  ],
  'SHAID,ALEJANDRO,BOJORQUEZ,INTERIAN': [
    {
      mod_page: 1674,
      mod_url: 2278,
      mod_forum: 3919,
      mod_resource: 19363,
      mod_assign: 1720,
      mod_folder: 1874,
    },
    49,
    7373,
  ],
  'JUAN,EMILIO,BALDERAS,PEREZ': [
    {
      mod_forum: 3204,
      mod_page: 1893,
      mod_url: 833,
      mod_assign: 1515,
      mod_folder: 1413,
      mod_resource: 1838,
    },
    46,
    3168,
  ],
  'JUAN,CARLOS,MOGUEL,SOLIS': [
    {
      mod_url: 732,
      mod_forum: 1321,
      mod_page: 791,
      mod_assign: 1418,
      mod_resource: 824,
      mod_folder: 745,
    },
    53,
    4204,
  ],
  'JOSE,ERMILO,CETINA,VEGA': [
    {
      mod_page: 4054,
      mod_forum: 1670,
      mod_assign: 3700,
      mod_url: 1697,
      mod_resource: 112890,
      mod_wiki: 6,
      mod_folder: 1973,
    },
    36,
    4044,
  ],
  'DANIEL,MEDINA,CAMARA': [
    {
      mod_url: 1156,
      mod_forum: 324,
      mod_page: 4621,
      mod_assign: 680,
      mod_folder: 1890,
      mod_resource: 594,
    },
    17,
    3216,
  ],
};

function createMoodleNodes() {
  return [
    {
      data: {
        id: 'mod_resource',
        level: 100,
        color: 'red',
      },
    },
    {
      data: {
        id: 'mod_forum',
        level: 100,
        color: 'red',
      },
    },
    {
      data: {
        id: 'mod_page',
        level: 100,
        color: 'red',
      },
    },
    {
      data: {
        id: 'mod_folder',
        level: 100,
        color: 'red',
      },
    },
    {
      data: {
        id: 'mod_url',
        level: 100,
        color: 'red',
      },
    },

    {
      data: {
        id: 'mod_assign',
        level: 100,
        color: 'red',
      },
    },
    {
      data: {
        id: 'mod_wiki',
        level: 100,
        color: 'red',
      },
    },
  ];
}

function createStudentNodes() {
  return Object.keys(info).map((student) => {
    return {
      data: {
        id: student,
        color: 'green',
      },
    };
  });
}

function createEdges() {
  const allEdges = [];
  Object.keys(info).forEach((student) => {
    const studentEdges = Object.keys(info[student][0]).map((activity) => {
      return {
        data: {
          id: Math.random(),
          source: student,
          target: activity,
        },
      };
    });

    allEdges.push(...studentEdges);
  });

  return allEdges;
}

const nodes = [...createMoodleNodes(), ...createStudentNodes()];
const edges = [...createEdges()];

const elements = [...nodes, ...edges];

const cy = cytoscape({
  container: document.getElementById('cy'),
  elements,
  style: [
    {
      selector: 'node',
      style: {
        shape: 'circle',
        'background-color': 'data(color)',
        label: 'data(id)',
      },
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
      },
    },
  ],
  layout: {
    name: 'concentric',
    concentric: function (node) {
      console.log(node.data('level') || 2);
      return node.data('level') || 10;
    },
    minNodeSpacing: 50,
  },
});

function makePopper(ele) {
  let ref = ele.popperRef(); // used only for positioning

  ele.tippy = tippy(ref, {
    // tippy options:
    content: () => {
      const content = document.createElement('div');
      content.innerHTML = ele.id();
      return content;
    },
    trigger: 'manual', // probably want manual mode
  });
}

cy.ready(function () {
  cy.elements().forEach(function (ele) {
    makePopper(ele);
  });
});

cy.elements().unbind('mouseover');
cy.elements().bind('mouseover', (event) => event.target.tippy.show());

cy.elements().unbind('mouseout');
cy.elements().bind('mouseout', (event) => event.target.tippy.hide());
