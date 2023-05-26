# Generated by Django 4.2 on 2023-05-26 19:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('nome', models.CharField(max_length=100)),
                ('CPF_CNPJ', models.CharField(max_length=25, unique=True)),
                ('data_nascimento', models.DateField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('telefone', models.CharField(max_length=15)),
                ('email', models.CharField(max_length=100, unique=True)),
                ('observacao', models.CharField(max_length=100)),
                ('logradouro', models.CharField(max_length=100)),
                ('bairro', models.CharField(max_length=50)),
                ('cidade', models.CharField(max_length=50)),
                ('uf', models.CharField(max_length=2)),
                ('cep', models.CharField(max_length=10)),
                ('complemento', models.CharField(max_length=100)),
                ('type_person', models.CharField(choices=[('F', 'Pessoa Física'), ('J', 'Pessoa Jurídica')], max_length=1)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Conta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('agencia', models.IntegerField()),
                ('numero', models.IntegerField()),
                ('digito', models.IntegerField()),
                ('saldo', models.DecimalField(decimal_places=2, max_digits=20)),
                ('limite', models.DecimalField(decimal_places=2, max_digits=20)),
                ('chavePix', models.CharField(max_length=100, unique=True)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Emprestimo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('valor', models.DecimalField(decimal_places=2, max_digits=10)),
                ('juros', models.DecimalField(decimal_places=2, max_digits=10)),
                ('data', models.DateTimeField(auto_now_add=True)),
                ('aprovado', models.BooleanField(default=False)),
                ('observacao', models.CharField(blank=True, max_length=100)),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='fastBank.conta')),
            ],
        ),
        migrations.CreateModel(
            name='Parcelas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vezes', models.IntegerField(default=1)),
                ('valorParcela', models.DecimalField(decimal_places=2, max_digits=10)),
                ('dataPagamento', models.DateField()),
                ('valorPago', models.DecimalField(decimal_places=2, max_digits=10)),
                ('emprestimo', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='fastBank.emprestimo')),
            ],
        ),
        migrations.CreateModel(
            name='Movimentacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chavePix', models.CharField(max_length=100)),
                ('tipo', models.CharField(max_length=1)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=10)),
                ('destinatario', models.CharField(max_length=100)),
                ('data', models.DateTimeField(auto_now_add=True)),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='conta', to='fastBank.conta')),
            ],
        ),
        migrations.CreateModel(
            name='Investimento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('valor', models.DecimalField(decimal_places=2, max_digits=10)),
                ('prazo', models.DateTimeField(auto_now_add=True)),
                ('saldoInvestido', models.DecimalField(decimal_places=2, max_digits=10)),
                ('local', models.CharField(max_length=50)),
                ('finalizado', models.BooleanField(default=False)),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fastBank.conta')),
            ],
        ),
        migrations.CreateModel(
            name='ClientePJ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inscricaoEstadual', models.CharField(max_length=30)),
                ('inscricaoMunicipal', models.CharField(max_length=30)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ClientePF',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rg', models.CharField(max_length=12)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
