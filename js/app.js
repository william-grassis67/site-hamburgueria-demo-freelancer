/* Burguer House — cardápio demonstrativo. Sem dependências. */
const CONFIG = {
  whatsapp: '5527997230221', // número de destino dos pedidos (somente DDI+DDD+número)
  delivery: 5.00,
  minOrder: 20.00,
  name: 'Burguer House'
};

const IMG = (id, w = 640) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');
const $ = s => document.querySelector(s);

const EXTRAS = {
  bacon: { n: 'Bacon crocante', p: 4 },
  cheddar: { n: 'Cheddar extra', p: 3 },
  ovo: { n: 'Ovo', p: 2.5 },
  burger: { n: 'Hambúrguer extra', p: 8 },
  cebola: { n: 'Cebola caramelizada', p: 3 },
  molho: { n: 'Molho da casa', p: 2 },
  barbecue: { n: 'Molho barbecue', p: 2 }
};
const DRINKS = [
  { id: 'coca', n: 'Refrigerante lata', p: 6 },
  { id: 'suco', n: 'Suco natural', p: 9 },
  { id: 'shake', n: 'Milkshake', p: 14 }
];
const REM_BURGER = ['Cebola', 'Picles', 'Tomate', 'Alface', 'Molho especial'];

const CATS = ['Hambúrgueres', 'Combos', 'Porções', 'Bebidas', 'Sobremesas'];

const P = [
  { id: 1, cat: 'Hambúrgueres', n: 'Smash Clássico', d: 'Pão brioche, blend smash 90g, queijo prato, picles, cebola e molho especial.', p: 28.9, img: 'photo-1568901346375-23c9450c58cd', best: 1, ex: ['bacon', 'cheddar', 'ovo', 'burger', 'cebola'], rm: REM_BURGER, dr: 1 },
  { id: 2, cat: 'Hambúrgueres', n: 'Cheddar Bacon', d: 'Blend 150g, cheddar cremoso, bacon crocante, cebola caramelizada e barbecue.', p: 34.9, promo: 29.9, img: 'photo-1553979459-d2229ba7433b', best: 1, ex: ['bacon', 'cheddar', 'ovo', 'burger', 'cebola'], rm: REM_BURGER, dr: 1 },
  { id: 3, cat: 'Hambúrgueres', n: 'Duplo House', d: 'Dois blends de 120g, queijo duplo, alface, tomate e maionese da casa.', p: 39.9, img: 'photo-1571091718767-18b5b1457add', best: 1, ex: ['bacon', 'cheddar', 'ovo', 'burger', 'cebola'], rm: REM_BURGER, dr: 1 },
  { id: 4, cat: 'Hambúrgueres', n: 'Chicken Crispy', d: 'Frango empanado crocante, queijo, alface, tomate e molho cremoso.', p: 31.9, img: 'photo-1606755962773-d324e0a13086', ex: ['bacon', 'cheddar', 'ovo', 'molho'], rm: REM_BURGER, dr: 1 },
  { id: 5, cat: 'Hambúrgueres', n: 'Veggie Burguer', d: 'Burger vegetal de grão-de-bico, queijo, rúcula, tomate e molho verde.', p: 29.9, img: 'photo-1520072959219-c595dc870360', ex: ['cheddar', 'ovo', 'molho'], rm: REM_BURGER, dr: 1 },
  { id: 6, cat: 'Combos', n: 'Combo Clássico', d: 'Smash Clássico + batata frita média + refrigerante lata.', p: 44.9, promo: 36.9, img: 'photo-1550547660-d9450f859349', best: 1, ex: ['bacon', 'cheddar', 'ovo'], rm: REM_BURGER, dr: 0 },
  { id: 7, cat: 'Combos', n: 'Combo Casal', d: '2 hambúrgueres à escolha + batata grande + 2 refrigerantes.', p: 89.9, promo: 74.9, img: 'photo-1586190848861-99aa4a171e90', best: 1, ex: ['bacon', 'cheddar', 'ovo'], rm: REM_BURGER, dr: 0 },
  { id: 8, cat: 'Combos', n: 'Combo Kids', d: 'Mini burger, batata pequena, suco e uma surpresa para a criançada.', p: 29.9, img: 'photo-1594212699903-ec8a3eca50f5', ex: ['cheddar'], rm: ['Cebola', 'Picles', 'Tomate'], dr: 0 },
  { id: 9, cat: 'Porções', n: 'Batata Frita', d: 'Porção crocante e sequinha, temperada na hora. Serve 2 pessoas.', p: 18.9, img: 'photo-1573080496219-bb080dd4f877', best: 1, ex: ['cheddar', 'bacon', 'molho'], rm: [], dr: 1 },
  { id: 10, cat: 'Porções', n: 'Onion Rings', d: 'Anéis de cebola empanados e fritos, com molho barbecue.', p: 21.9, img: 'photo-1639024471283-03518883512d', ex: ['barbecue', 'molho'], rm: [], dr: 1 },
  { id: 11, cat: 'Porções', n: 'Nuggets Crocantes', d: '10 unidades de frango empanado com molho à escolha.', p: 24.9, promo: 21.9, img: 'photo-1562967914-608f82629710', ex: ['barbecue', 'molho', 'cheddar'], rm: [], dr: 1 },
  { id: 12, cat: 'Bebidas', n: 'Refrigerante Lata', d: 'Lata 350ml gelada. Cola, guaraná ou laranja.', p: 6, img: 'photo-1622483767028-3f66f32aef97', ex: [], rm: [], dr: 0 },
  { id: 13, cat: 'Bebidas', n: 'Suco de Laranja', d: 'Natural, 400ml, feito na hora, sem adição de açúcar.', p: 9.9, img: 'photo-1600271886742-f049cd451bba', ex: [], rm: [], dr: 0 },
  { id: 14, cat: 'Bebidas', n: 'Milkshake de Chocolate', d: 'Sorvete cremoso, calda de chocolate e chantilly. 400ml.', p: 16.9, img: 'photo-1572490122747-3968b75cc699', best: 1, ex: [], rm: [], dr: 0 },
  { id: 15, cat: 'Sobremesas', n: 'Brownie com Sorvete', d: 'Brownie quentinho de chocolate belga com bola de sorvete de creme.', p: 19.9, promo: 16.9, img: 'photo-1606313564200-e75d5e30476c', ex: [], rm: [], dr: 0 },
  { id: 16, cat: 'Sobremesas', n: 'Bolo de Chocolate', d: 'Fatia generosa com cobertura cremosa de chocolate.', p: 14.9, img: 'photo-1578985545062-69928b1d9587', ex: [], rm: [], dr: 0 }
];
const byId = id => P.find(x => x.id === id);
const price = p => p.promo || p.p;

let cart = [];
let uid = 1;
let d = null; // estado do detalhe do produto
let chk = { pay: 'Pix' };

/* ---------- helpers de UI ---------- */
function img(p, w, cls = '') {
  return `<div class="ph ${cls}"><img src="${IMG(p.img, w)}" alt="${p.n}" loading="lazy" onerror="this.hidden=true;this.parentNode.classList.add('noimg')"></div>`;
}
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.classList.add('on');
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 1800);
}
function openSheet(html) {
  $('#sheet').innerHTML = html; $('#sheet').hidden = false; $('#ov').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeSheet() {
  $('#sheet').hidden = true; $('#ov').hidden = true; document.body.style.overflow = '';
}
$('#ov').onclick = closeSheet;
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

/* ---------- menu ---------- */
function priceHtml(p) {
  return p.promo ? `<span class="price promo"><s>${fmt(p.p)}</s>${fmt(p.promo)}</span>` : `<span class="price">${fmt(p.p)}</span>`;
}
function badge(p) { return p.promo ? `<span class="badge">-${Math.round((1 - p.promo / p.p) * 100)}%</span>` : p.best ? `<span class="badge b2">★ Top</span>` : ''; }

function tile(p) {
  return `<button class="tile" data-open="${p.id}">
    <div style="position:relative">${badge(p)}${img(p, 400)}</div>
    <div class="tb"><h4>${p.n}</h4><div style="display:flex;justify-content:space-between;align-items:center">${priceHtml(p)}<span class="add" data-quick="${p.id}" aria-label="Adicionar">+</span></div></div>
  </button>`;
}
function card(p, i) {
  return `<button class="card" data-open="${p.id}" style="animation-delay:${Math.min(i, 8) * 40}ms">
    <div class="cb"><h4>${p.n}</h4><p>${p.d}</p>
      <div class="row">${priceHtml(p)}<span class="add" data-quick="${p.id}" aria-label="Adicionar ${p.n}">+</span></div></div>
    <div style="position:relative">${badge(p)}${img(p, 300)}</div>
  </button>`;
}
function rail(id, title, sub, list) {
  return `<section class="sec" id="${id}"><h3>${title}</h3><div class="sub">${sub}</div><div class="rail">${list.map(tile).join('')}</div></section>`;
}

function renderMenu() {
  const q = $('#q').value.trim().toLowerCase();
  const m = $('#menu');
  if (q) {
    const l = P.filter(p => (p.n + ' ' + p.d + ' ' + p.cat).toLowerCase().includes(q));
    m.innerHTML = l.length ? `<section class="sec"><h3>Resultados</h3><div class="sub">${l.length} item(ns) encontrado(s)</div><div class="grid">${l.map(card).join('')}</div></section>` : `<div class="empty">Nada encontrado para “${q}”</div>`;
    return;
  }
  let h = rail('best', 'Mais vendidos', 'Os favoritos da casa', P.filter(p => p.best));
  h += rail('promo', 'Ofertas da casa', 'Preços especiais por tempo limitado', P.filter(p => p.promo));
  h += CATS.map(c => `<section class="sec" id="c-${c}"><h3>${c}</h3><div class="sub">${P.filter(p => p.cat === c).length} opções</div><div class="grid">${P.filter(p => p.cat === c).map(card).join('')}</div></section>`).join('');
  m.innerHTML = h;
}

function renderChips() {
  const items = [['best', 'Mais vendidos'], ['promo', 'Ofertas'], ...CATS.map(c => ['c-' + c, c])];
  $('#chips').innerHTML = items.map(([id, t], i) => `<button class="chip${i ? '' : ' on'}" data-go="${id}">${t}</button>`).join('');
}

document.addEventListener('click', e => {
  const quick = e.target.closest('[data-quick]');
  if (quick) { e.stopPropagation(); quickAdd(+quick.dataset.quick); return; }
  const op = e.target.closest('[data-open]');
  if (op) { openProduct(+op.dataset.open); return; }
  const go = e.target.closest('[data-go]');
  if (go) {
    $('#q').value = ''; if ($('#menu').querySelector('.empty') || !document.getElementById(go.dataset.go)) renderMenu();
    const el = document.getElementById(go.dataset.go);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 150, behavior: 'smooth' });
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === go));
  }
});
$('#q').addEventListener('input', renderMenu);

/* scroll-spy */
addEventListener('scroll', () => {
  if ($('#q').value) return;
  const ids = ['best', 'promo', ...CATS.map(c => 'c-' + c)];
  let cur = ids[0];
  for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 200) cur = id; }
  document.querySelectorAll('.chip').forEach(c => {
    const on = c.dataset.go === cur;
    if (on && !c.classList.contains('on')) c.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    c.classList.toggle('on', on);
  });
}, { passive: true });

/* ---------- produto / personalização ---------- */
function unitPrice(it) {
  const p = byId(it.id);
  return price(p) + it.ex.reduce((s, k) => s + EXTRAS[k].p, 0) + (it.dr ? DRINKS.find(x => x.id === it.dr).p : 0);
}
function quickAdd(id) {
  const p = byId(id);
  cart.push({ uid: uid++, id, qty: 1, ex: [], rem: [], dr: null, obs: '' });
  toast(`${p.n} adicionado ✓`); updateBar(true);
}
function openProduct(id, editUid) {
  const p = byId(id);
  const it = editUid ? cart.find(c => c.uid === editUid) : null;
  d = { p, edit: editUid || null, qty: it ? it.qty : 1, ex: new Set(it ? it.ex : []), rem: new Set(it ? it.rem : []), dr: it ? it.dr : null, obs: it ? it.obs : '' };
  const exHtml = p.ex.length ? `<div class="grp"><h5>Adicionais <small>opcional</small></h5>${p.ex.map(k => `<label class="opt"><span class="n">${EXTRAS[k].n}</span><em>+ ${fmt(EXTRAS[k].p)}</em><input type="checkbox" data-ex="${k}" ${d.ex.has(k) ? 'checked' : ''}><span class="ck"></span></label>`).join('')}</div>` : '';
  const rmHtml = p.rm.length ? `<div class="grp"><h5>Remover ingredientes <small>opcional</small></h5>${p.rm.map(r => `<label class="opt rm"><span class="n">Sem ${r.toLowerCase()}</span><input type="checkbox" data-rm="${r}" ${d.rem.has(r) ? 'checked' : ''}><span class="ck"></span></label>`).join('')}</div>` : '';
  const drHtml = p.dr ? `<div class="grp"><h5>Adicionar bebida <small>opcional</small></h5>${DRINKS.map(x => `<label class="opt"><span class="n">${x.n}</span><em>+ ${fmt(x.p)}</em><input type="checkbox" data-dr="${x.id}" ${d.dr === x.id ? 'checked' : ''}><span class="ck"></span></label>`).join('')}</div>` : '';
  openSheet(`<div class="sh-head"><button class="x" data-close aria-label="Fechar">✕</button><div class="sh-img">${img(p, 800)}</div></div>
    <div class="sh-body"><div style="padding-top:16px"><div class="pd-name">${p.n}</div><div class="pd-desc">${p.d}</div>${priceHtml(p)}</div>
      ${exHtml}${rmHtml}${drHtml}
      <div class="grp"><h5>Observações</h5><textarea class="obs" id="obs" placeholder="Ex.: ponto da carne, sem cebola, caprichar no molho...">${d.obs}</textarea></div></div>
    <div class="sh-foot"><div class="foot-row"><div class="qty"><button data-q="-1" aria-label="Menos">−</button><b id="dq">${d.qty}</b><button data-q="1" aria-label="Mais">+</button></div>
      <button class="btn" id="dsave"><span>${d.edit ? 'Atualizar' : 'Adicionar'}</span><span id="dtot"></span></button></div></div>`);
  dTotal();
  const s = $('#sheet');
  s.querySelector('[data-close]').onclick = closeSheet;
  s.querySelectorAll('[data-ex]').forEach(i => i.onchange = () => { i.checked ? d.ex.add(i.dataset.ex) : d.ex.delete(i.dataset.ex); dTotal(); });
  s.querySelectorAll('[data-rm]').forEach(i => i.onchange = () => { i.checked ? d.rem.add(i.dataset.rm) : d.rem.delete(i.dataset.rm); });
  s.querySelectorAll('[data-dr]').forEach(i => i.onchange = () => {
    d.dr = i.checked ? i.dataset.dr : null;
    s.querySelectorAll('[data-dr]').forEach(o => { if (o !== i) o.checked = false; }); dTotal();
  });
  s.querySelectorAll('[data-q]').forEach(b => b.onclick = () => { d.qty = Math.max(1, Math.min(20, d.qty + +b.dataset.q)); $('#dq').textContent = d.qty; dTotal(); });
  $('#obs').oninput = e => d.obs = e.target.value;
  $('#dsave').onclick = () => {
    const data = { id: p.id, qty: d.qty, ex: [...d.ex], rem: [...d.rem], dr: d.dr, obs: d.obs.trim() };
    if (d.edit) { Object.assign(cart.find(c => c.uid === d.edit), data); toast('Item atualizado ✓'); closeSheet(); updateBar(); openCart(); return; }
    cart.push({ uid: uid++, ...data }); closeSheet(); toast(`${p.n} adicionado ✓`); updateBar(true);
  };
}
function dTotal() {
  const it = { id: d.p.id, ex: [...d.ex], dr: d.dr };
  $('#dtot').textContent = fmt(unitPrice(it) * d.qty);
}

/* ---------- carrinho ---------- */
const sub = () => cart.reduce((s, i) => s + unitPrice(i) * i.qty, 0);
const count = () => cart.reduce((s, i) => s + i.qty, 0);
function updateBar(bump) {
  const b = $('#cartbar');
  b.hidden = !cart.length;
  $('#cb-count').textContent = count(); $('#cb-total').textContent = fmt(sub());
  if (bump) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
}
$('#cartbar').onclick = openCart;

function itemDetail(i) {
  const l = [];
  if (i.ex.length) l.push('+ ' + i.ex.map(k => EXTRAS[k].n).join(', '));
  if (i.rem.length) l.push('Sem: ' + i.rem.join(', ').toLowerCase());
  if (i.dr) l.push('Bebida: ' + DRINKS.find(x => x.id === i.dr).n);
  if (i.obs) l.push('Obs: ' + i.obs);
  return l.join('<br>');
}
function openCart() {
  if (!cart.length) { closeSheet(); return; }
  const s = sub(), tot = s + CONFIG.delivery, low = s < CONFIG.minOrder;
  openSheet(`<div class="sh-title"><h3>Seu pedido</h3><button class="x" style="position:static" data-close aria-label="Fechar">✕</button></div>
    <div class="sh-body">${cart.map(i => {
    const p = byId(i.id); return `<div class="ci">${img(p, 160)}<div class="cb"><h4>${p.n}</h4><div class="det">${itemDetail(i)}</div>
      <div class="acts"><div class="qty sm"><button data-cq="${i.uid}" data-d="-1" aria-label="Menos">−</button><b>${i.qty}</b><button data-cq="${i.uid}" data-d="1" aria-label="Mais">+</button></div>
      <div style="text-align:right"><b>${fmt(unitPrice(i) * i.qty)}</b><div>${p.ex.length || p.rm.length || p.dr ? `<button class="link" data-edit="${i.uid}">Editar</button> · ` : ''}<button class="link" data-del="${i.uid}" style="color:#E5484D">Remover</button></div></div></div></div></div>`;
  }).join('')}
      <div class="sum"><div><span>Subtotal</span><span>${fmt(s)}</span></div><div><span>Entrega</span><span>${fmt(CONFIG.delivery)}</span></div><div class="tot"><span>Total</span><span>${fmt(tot)}</span></div></div>
      ${low ? `<div class="warn">Pedido mínimo de ${fmt(CONFIG.minOrder)}. Faltam ${fmt(CONFIG.minOrder - s)}.</div>` : ''}</div>
    <div class="sh-foot"><div class="foot-row"><button class="btn" id="goChk" ${low ? 'disabled' : ''}><span>Continuar</span><span>${fmt(tot)}</span></button></div></div>`);
  const sh = $('#sheet');
  sh.querySelector('[data-close]').onclick = closeSheet;
  sh.querySelectorAll('[data-cq]').forEach(b => b.onclick = () => {
    const it = cart.find(c => c.uid === +b.dataset.cq); it.qty += +b.dataset.d;
    if (it.qty < 1) cart = cart.filter(c => c !== it);
    updateBar(); openCart();
  });
  sh.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { cart = cart.filter(c => c.uid !== +b.dataset.del); updateBar(); openCart(); });
  sh.querySelectorAll('[data-edit]').forEach(b => b.onclick = () => { const it = cart.find(c => c.uid === +b.dataset.edit); openProduct(it.id, it.uid); });
  $('#goChk').onclick = openCheckout;
}

/* ---------- finalização WhatsApp ---------- */
function openCheckout() {
  const tot = sub() + CONFIG.delivery;
  openSheet(`<div class="sh-title"><button class="back" id="bk">← Voltar</button><h3>Finalizar pedido</h3><span style="width:60px"></span></div>
    <div class="sh-body">
      <div class="fld"><label>Seu nome</label><input id="f-nome" autocomplete="name" placeholder="Como podemos te chamar?"></div>
      <div class="fld"><label>Endereço</label><input id="f-end" autocomplete="street-address" placeholder="Rua, número e bairro"></div>
      <div class="fld"><label>Complemento <small style="color:var(--mut);font-weight:500">(opcional)</small></label><input id="f-comp" placeholder="Apto, bloco, ponto de referência"></div>
      <div class="fld"><label>Forma de pagamento</label><div class="pay">
        <button data-pay="Pix" class="on"><i>PIX</i>Pix</button><button data-pay="Cartão"><i>•••</i>Cartão</button><button data-pay="Dinheiro"><i>R$</i>Dinheiro</button></div></div>
      <div class="fld" id="troco-w" hidden><label>Troco para quanto?</label><input id="f-troco" inputmode="decimal" placeholder="Ex.: 50 (deixe vazio se não precisa)"></div>
      <div class="sum" style="margin-top:14px"><div class="tot"><span>Total do pedido</span><span>${fmt(tot)}</span></div></div>
      <p style="font-size:11.5px;color:var(--mut);margin-top:8px">Sem cadastro. Seu pedido será enviado pelo WhatsApp.</p></div>
    <div class="sh-foot"><div class="foot-row"><button class="btn wa" id="send">Enviar pedido pelo WhatsApp</button></div></div>`);
  chk.pay = 'Pix';
  const sh = $('#sheet');
  $('#bk').onclick = openCart;
  sh.querySelectorAll('[data-pay]').forEach(b => b.onclick = () => {
    chk.pay = b.dataset.pay;
    sh.querySelectorAll('[data-pay]').forEach(x => x.classList.toggle('on', x === b));
    $('#troco-w').hidden = chk.pay !== 'Dinheiro';
  });
  $('#send').onclick = sendOrder;
}

function buildMessage(f) {
  const s = sub(), tot = s + CONFIG.delivery;
  let m = `*NOVO PEDIDO — ${CONFIG.name}*\n_(Cardápio digital)_\n\n`;
  m += '*ITENS*\n';
  cart.forEach((i, n) => {
    const p = byId(i.id);
    m += `${n + 1}. ${i.qty}x ${p.n} — ${fmt(unitPrice(i) * i.qty)}\n`;
    if (i.ex.length) m += `   + Adicionais: ${i.ex.map(k => EXTRAS[k].n).join(', ')}\n`;
    if (i.rem.length) m += `   - Sem: ${i.rem.join(', ').toLowerCase()}\n`;
    if (i.dr) m += `   Bebida: ${DRINKS.find(x => x.id === i.dr).n}\n`;
    if (i.obs) m += `   Obs: ${i.obs}\n`;
  });
  m += `\n*VALORES*\nSubtotal: ${fmt(s)}\nEntrega: ${fmt(CONFIG.delivery)}\n*Total: ${fmt(tot)}*\n`;
  m += `\n*ENTREGA*\nNome: ${f.nome}\nEndereço: ${f.end}\n`;
  if (f.comp) m += `Complemento: ${f.comp}\n`;
  m += `\n*PAGAMENTO*\n${chk.pay}`;
  if (chk.pay === 'Dinheiro') {
    const t = parseFloat(String(f.troco).replace(',', '.'));
    m += t > tot ? `\nTroco para ${fmt(t)} (troco: ${fmt(t - tot)})` : '\nSem necessidade de troco';
  }
  return m;
}

function sendOrder() {
  const f = { nome: $('#f-nome').value.trim(), end: $('#f-end').value.trim(), comp: $('#f-comp').value.trim(), troco: $('#f-troco').value };
  let ok = true;
  [['f-nome', f.nome], ['f-end', f.end]].forEach(([id, v]) => { const el = $('#' + id); el.classList.toggle('err', !v); if (!v) ok = false; });
  if (!ok) { toast('Preencha nome e endereço'); return; }
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(buildMessage(f))}`;
  const w = window.open(url, '_blank');
  if (!w) location.href = url;
  toast('Abrindo o WhatsApp…');
}

renderChips(); renderMenu(); updateBar();
