'use strict';

[{
  zoneRegex: {
    en: /^Eden's Gate: Resurrection$/,
    cn: /^伊甸希望乐园 \(觉醒之章1\)$/,
    ko: /^희망의 낙원 에덴: 각성편 \(1\)$/,
  },
  timelineFile: 'e1n.txt',
  triggers: [
    {
      id: 'E1N Eden\'s Gravity',
      regex: Regexes.startsUsing({ id: '3D94', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3D94', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3D94', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3D94', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3D94', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3D94', source: '에덴 프라임', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E1N Fragor Maximus',
      regex: Regexes.startsUsing({ id: '3DA4', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3DA4', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3DA4', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3DA4', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3DA4', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3DA4', source: '에덴 프라임', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E1N Dimensional Shift',
      regex: Regexes.startsUsing({ id: '3D9C', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3D9C', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3D9C', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3D9C', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3D9C', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3D9C', source: '에덴 프라임', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'E1N Eden\'s Flare',
      regex: Regexes.startsUsing({ id: '3D97', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3D97', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3D97', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3D97', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3D97', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3D97', source: '에덴 프라임', capture: false }),
      response: Responses.getUnder('alert'),
    },
    {
      id: 'E1N Vice of Vanity You',
      regex: Regexes.tether({ id: '0011', target: 'Eden Prime' }),
      regexDe: Regexes.tether({ id: '0011', target: 'Prim-Eden' }),
      regexFr: Regexes.tether({ id: '0011', target: 'Primo-Éden' }),
      regexJa: Regexes.tether({ id: '0011', target: 'エデン・プライム' }),
      regexCn: Regexes.tether({ id: '0011', target: '至尊伊甸' }),
      regexKo: Regexes.tether({ id: '0011', target: '에덴 프라임' }),
      condition: function(data, matches) {
        return data.me == matches.source;
      },
      alertText: {
        en: 'Tank Laser on YOU',
        de: 'Tank Laser auf DIR',
        fr: 'Tank laser sur VOUS',
        cn: '坦克射线点名',
        ko: '나에게 탱커 빔',
      },
    },
    {
      id: 'E1N Spear Of Paradise',
      regex: Regexes.startsUsing({ id: '3DA1', source: 'Eden Prime' }),
      regexDe: Regexes.startsUsing({ id: '3DA1', source: 'Prim-Eden' }),
      regexFr: Regexes.startsUsing({ id: '3DA1', source: 'Primo-Éden' }),
      regexJa: Regexes.startsUsing({ id: '3DA1', source: 'エデン・プライム' }),
      regexCn: Regexes.startsUsing({ id: '3DA1', source: '至尊伊甸' }),
      regexKo: Regexes.startsUsing({ id: '3DA1', source: '에덴 프라임' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'tank' || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'E1N Vice of Apathy Mark',
      regex: Regexes.headMarker({ id: '001C' }),
      condition: function(data, matches) {
        return data.me == matches.target;
      },
      alertText: {
        en: 'Drop Puddle, Run Middle',
        de: 'Flächen ablegen, danach in die Mitte',
        fr: 'Placez les zones au sol, courez au milieu',
        cn: '放圈，回中央',
        ko: '장판 깔고 중앙으로',
      },
    },
    {
      // 10.5 second cast, maybe warn 6 seconds ahead so that folks bait outside.
      id: 'E1N Pure Light',
      regex: Regexes.startsUsing({ id: '3DA3', source: 'Eden Prime', capture: false }),
      regexDe: Regexes.startsUsing({ id: '3DA3', source: 'Prim-Eden', capture: false }),
      regexFr: Regexes.startsUsing({ id: '3DA3', source: 'Primo-Éden', capture: false }),
      regexJa: Regexes.startsUsing({ id: '3DA3', source: 'エデン・プライム', capture: false }),
      regexCn: Regexes.startsUsing({ id: '3DA3', source: '至尊伊甸', capture: false }),
      regexKo: Regexes.startsUsing({ id: '3DA3', source: '에덴 프라임', capture: false }),
      delaySeconds: 4.5,
      response: Responses.getBehind(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Eden(?! )': 'Eden',
        'Eden Prime': 'Prim-Eden',
        'Guardian of Paradise': 'Hüter von Eden',
      },
      'replaceText': {
        'Delta Attack': 'Delta-Attacke',
        'Dimensional Shift': 'Dimensionsverschiebung',
        'Eden\'s Blizzard III': 'Eden-Eisga',
        'Eden\'s Fire III': 'Eden-Feuga',
        'Eden\'s Flare': 'Eden-Flare',
        'Eden\'s Gravity': 'Eden-Gravitas',
        'Eden\'s Thunder III': 'Eden-Blitzga',
        'Eternal Breath': 'Ewiger Atem',
        'Fragor Maximus': 'Fragor Maximus',
        'Heavensunder': 'Himmelsdonner',
        'Mana Burst': 'Manastoß',
        'Mana Slice': 'Manahieb',
        'Paradisal Dive': 'Paradiessturz',
        'Paradise Lost': 'Verlorenes Paradies',
        'Primeval Stasis': 'Urzeitliche Stase',
        'Pure Beam': 'Läuternder Strahl',
        'Pure Light': 'Läuterndes Licht',
        'Spear Of Paradise': 'Paradiesspeer',
        'Sunder Pressure': 'Druck',
        'Unto Dust': 'Sprengung',
        'Vice And Virtue': 'Laster und Tugend',
        'Vice Of Apathy': 'Laster der Apathie',
        'Vice Of Vanity': 'Laster der Eitelkeit',
      },
      '~effectNames': {
        'Brink of Death': 'Sterbenselend',
        'Fetters': 'Gefesselt',
        'Heavy': 'Gewicht',
        'Summon Order': 'Egi-Attacke I',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Eden(?! )': 'Éden',
        'Eden Prime': 'Primo-Éden',
        'Guardian of Paradise': 'Gardien du jardin',
      },
      'replaceText': {
        'Delta Attack': 'Attaque Delta',
        'Dimensional Shift': 'Translation dimensionnelle',
        'Eden\'s Blizzard III': 'Méga Glace édénique',
        'Eden\'s Fire III': 'Méga Feu édénique',
        'Eden\'s Flare': 'Brasier édénique',
        'Eden\'s Gravity': 'Gravité édénique',
        'Eden\'s Thunder III': 'Méga Foudre édénique',
        'Eternal Breath': 'Souffle de l\'éternel',
        'Fragor Maximus': 'Fragor Maximus',
        'Heavensunder': 'Ravageur de paradis',
        'Mana Burst': 'Explosion de mana',
        'Mana Slice': 'Taillade de mana',
        'Paradisal Dive': 'Piqué du paradis',
        'Paradise Lost': 'Paradis perdu',
        'Primeval Stasis': 'Stase primordiale',
        'Pure Beam': 'Rayon purificateur',
        'Pure Light': 'Lumière purificatrice',
        'Spear Of Paradise': 'Lance du paradis',
        'Spear of Paradise': 'Lance du paradis',
        'Sunder Pressure': 'Force de pesanteur',
        'Unto Dust': 'Déflagration',
        'Vice and Virtue': 'Vice et vertue',
        'Vice of Apathy': 'Péché d\'apathie',
        'Vice of Vanity': 'Péché de vanité',
      },
      '~effectNames': {
        'Brink of Death': 'Mourant',
        'Fetters': 'Attache',
        'Heavy': 'Pesanteur',
        'Summon Order': 'Action en attente: 1',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Eden(?! )': 'エデン',
        'Eden Prime': 'エデン・プライム',
        'Guardian of Paradise': 'エデン・ガーデナー',
      },
      'replaceText': {
        'Delta Attack': 'デルタアタック',
        'Dimensional Shift': 'ディメンションシフト',
        'Eden\'s Blizzard III': 'エデン・ブリザガ',
        'Eden\'s Fire III': 'エデン・ファイガ',
        'Eden\'s Flare': 'エデン・フレア',
        'Eden\'s Gravity': 'エデン・グラビデ',
        'Eden\'s Thunder III': 'エデン・サンダガ',
        'Eternal Breath': 'エターナル・ブレス',
        'Fragor Maximus': 'フラゴルマクシマス',
        'Heavensunder': 'ヘヴンサンダー',
        'Mana Burst': 'マナバースト',
        'Mana Slice': 'マナスラッシュ',
        'Paradisal Dive': 'パラダイスダイブ',
        'Paradise Lost': 'パラダイスロスト',
        'Primeval Stasis': 'プライムイーバルステーシス',
        'Pure Beam': 'ピュアレイ',
        'Pure Light': 'ピュアライト',
        'Spear of Paradise': 'スピア・オブ・パラダイス',
        'Sunder Pressure': '重圧',
        'Unto Dust': '爆裂',
        'Vice and Virtue': 'ヴァイス・アンド・ヴァーチュー',
        'Vice of Apathy': 'ヴァイス・オブ・アパシー',
        'Vice of Vanity': 'ヴァイス・オブ・ヴァニティー',
      },
      '~effectNames': {
        'Brink of Death': '衰弱［強］',
        'Fetters': '拘束',
        'Heavy': 'ヘヴィ',
        'Summon Order': 'アクション実行待機I',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Eden(?! )': '伊甸',
        'Eden Prime': '至尊伊甸',
        'Guardian of Paradise': '伊甸守护者',
      },
      'replaceText': {
        'Delta Attack': '三角攻击',
        'Dimensional Shift': '空间转换',
        'Eden\'s Blizzard III': '伊甸冰封',
        'Eden\'s Fire III': '伊甸爆炎',
        'Eden\'s Flare': '伊甸核爆',
        'Eden\'s Gravity': '伊甸重力',
        'Eden\'s Thunder III': '伊甸暴雷',
        'Eternal Breath': '永恒吐息',
        'Fragor Maximus': '极大爆炸',
        'Heavensunder': '天国分断',
        'Mana Burst': '魔力爆发',
        'Mana Slice': '魔力斩击',
        'Paradisal Dive': '乐园冲',
        'Paradise Lost': '失乐园',
        'Primeval Stasis': '原初停滞',
        'Pure Beam': '净土射线',
        'Pure Light': '净土之光',
        'Spear [oO]f Paradise': '乐园之枪',
        'Sunder Pressure': '超重压',
        'Unto Dust': '归于尘土',
        'Vice [aA]nd Virtue': '恶习与美德',
        'Vice [oO]f Apathy': '冷漠之恶',
        'Vice [oO]f Vanity': '虚荣之恶',
      },
      '~effectNames': {
        'Brink of Death': '濒死',
        'Fetters': '拘束',
        'Heavy': '加重',
        'Summon Order': '发动技能待命I',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Eden(?! )': '에덴',
        'Eden Prime': '에덴 프라임',
        'Guardian of Paradise': '에덴 정원사',
      },
      'replaceText': {
        'Delta Attack': '델타 공격',
        'Dimensional Shift': '차원 전환',
        'Eden\'s Blizzard III': '에덴 블리자가',
        'Eden\'s Fire III': '에덴 파이가',
        'Eden\'s Flare': '에덴 플레어',
        'Eden\'s Gravity': '에덴 그라비데',
        'Eden\'s Thunder III': '에덴 선더가',
        'Eternal Breath': '영원의 숨결',
        'Fragor Maximus': '우주 탄생',
        'Heavensunder': '천국의 낙뢰',
        'Mana Burst': '마나 폭발',
        'Mana Slice': '마나 베기',
        'Paradisal Dive': '낙원 강하',
        'Paradise Lost': '실낙원',
        'Primeval Stasis': '태초의 안정',
        'Pure Beam': '완전한 광선',
        'Pure Light': '완전한 빛',
        'Spear [oO]f Paradise': '낙원의 창',
        'Sunder Pressure': '중압',
        'Unto Dust': '폭렬',
        'Vice [aA]nd Virtue': '선과 악',
        'Vice [oO]f Apathy': '냉담의 악덕',
        'Vice [oO]f Vanity': '허영의 악덕',
      },
      '~effectNames': {
        'Brink of Death': 'Brink of Death',
        'Fetters': 'Fetters',
        'Heavy': 'Heavy',
        'Summon Order': 'Summon Order',
      },
    },
  ],
}];
